const subscribes = {
    "message-recived": [],
    "status-changed": [],
};
// console.log(!!subscribes.length);
let ws = null;

const notifySubscribersAboutStatus = (status) => {
    subscribes["status-changed"].forEach((s) => s(status));
};

const closeHandler = () => {
    notifySubscribersAboutStatus("pending");
    console.log("CLOSE WS");
    setTimeout(createChannel, 1000);
};
const openHandler = () => {
    notifySubscribersAboutStatus("ready");
    console.log("OPEN WS");
};
const errorHandler = () => {
    notifySubscribersAboutStatus("error");
    console.log("ERROR WS");
};

const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data);
    if (subscribes.length !== 0) {
        subscribes["message-recived"].forEach((s) => s(newMessages));
    }
};

const cleanUp = () => {
    ws.removeEventListener("close", closeHandler);
    ws.removeEventListener("message", messageHandler);
    ws.removeEventListener("open", openHandler);
    ws.removeEventListener("error", errorHandler);
};

function createChannel() {
    if (ws !== null) {
        // console.log(ws)
        cleanUp();
        ws.close();
    }

    ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    notifySubscribersAboutStatus("pending");
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
    ws.addEventListener("open", openHandler);
    ws.addEventListener("error", errorHandler);
}

export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        subscribes["message-recived"] = [];
        subscribes["status-changed"] = [];
        cleanUp();
        ws.close();
    },
    subscribe(eventName, callback) {
        // console.log("!!subscribes");
        // console.log(callback);
        subscribes[eventName].push(callback);
        return () => {
            subscribes[eventName] = subscribes[eventName].filter(
                (subs) => subs !== callback
            );
        };
    },
    unsubscribe(eventName, callback) {
        subscribes[eventName] = subscribes[eventName].filter(
            (subs) => subs !== callback
        );
    },
    sendMessage(message) {
        if (ws !== null) {
            ws.send(message);
        }
    },
};

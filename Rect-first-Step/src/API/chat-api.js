let subscribes = [];
console.log(!!subscribes.length)
let ws = null;

const closeHandler = () => {
    console.log("CLOSE WS");
    setTimeout(createChannel, 1000);
};

const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data);
    console.log(newMessages)
    console.log(Array.isArray(subscribes))
    console.log(!!subscribes.length)
    console.log('messageHandler')
    console.dir(subscribes)
    if(subscribes.length !== 0){
        subscribes.forEach(s => s(newMessages))
    }
    // subscribes.forEach(s => (
    //     console.log(newMessages)
        // (newMessages)
    
        // );
    // subscribes = [...subscribes, ...newMessages];
};
// ws.addEventListener("message", messageHandler);

function createChannel() {
    if (ws !== null) {
        // console.log(ws)
        ws.removeEventListener("close", closeHandler);
        ws.close()
    }
    console.log("!!subscribes.length")
    console.log(!!subscribes.length)
    ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
}

export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        subscribes = []
        ws.removeEventListener("close", closeHandler);
        ws.removeEventListener("message", messageHandler);
        ws.close();
    },
    subscribe(callback) {
        console.log("!!subscribes")
        console.log(callback)
        subscribes.push(callback);
        return () => {
            subscribes = subscribes.filter((subs) => subs !== callback);
        };
    },
    unsubscribe(callback) {
        subscribes = subscribes.filter((subs) => subs !== callback);
    },
    sendMessage(message) {
        if (ws !== null) {
            ws.send(message);
        }
    },
};

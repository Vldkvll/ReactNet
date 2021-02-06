const subscribes = [];

let ws = null;

const closeHandler = () => {
    console.log("CLOSE WS");
    setTimeout(createChannel, 1000);
};

const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data);
    subscribes.forEach( subs => subs(newMessages))
};
// ws.addEventListener("message", messageHandler);

function createChannel() {
    if (ws !== null) {
        ws.removeEventListener("close", closeHandler);
    }
    ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    ws.addEventListener("close", closeHandler);
}

export const chatApi = {
    subscribe(cb){
        subscribes.push(cb)
    }
}
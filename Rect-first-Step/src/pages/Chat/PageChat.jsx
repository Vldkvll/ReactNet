import React, { useEffect, useState, useLayoutEffect } from "react";

const PageChat = () => {
    return (
        <div>
            <Chat />
        </div>
    );
};

const Chat = () => {
    const [wsChannel, setWsChannel] = useState(
        new WebSocket(
            "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
        )
    );

    useEffect(() => {
        let ws = null;

        const closeHandler = () => {
            console.log("CLOSE WS");
            setTimeout(createChannel, 1000);
        };

        function createChannel() {
            if (ws !== null) {
                ws.removeEventListener("close", closeHandler);
            }
            ws = new WebSocket(
                "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
            );
            ws.addEventListener("close", closeHandler);

            setWsChannel(ws);
        }

        createChannel();
    }, []);
    // console.log(wsChannel)

    return (
        <div>
            <Messages wsChannel={wsChannel} />
            <AddMessageForm wsChannel={wsChannel} />
        </div>
    );
};
const Messages = ({ wsChannel }) => {
    // console.log(wsChannel)

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messageHandler = (e) => {
            const newMessages = JSON.parse(e.data);

            setMessages((prevMessage) => [...prevMessage, ...newMessages]);
        };
        wsChannel.addEventListener("message", messageHandler);
        // }
    }, []);

    return (
        <div style={{ height: "450px", overflowY: "auto" }}>
            {messages.map((mess, index) => (
                <Message key={index} message={mess} />
            ))}
        </div>
    );
};

const Message = ({ message }) => {
    // console.log(message);
    return (
        <div>
            <img
                src={message.photo}
                style={{ maxWidth: "75px", paddingRight: "20px" }}
            />
            <b>{message.message}</b>

            <br />
            <span style={{ paddingLeft: "10px" }}>{message.userName}</span>
            <hr />
        </div>
    );
};

const AddMessageForm = ({ wsChannel }) => {
    const [message, setMessage] = useState("");
    const [readyStatus, setReadyStatus] = useState("pending");

    useEffect(() => {
        // if (!wsChannel) {
        //     return;
        // } else {
        wsChannel.addEventListener("open", (e) => {
            setReadyStatus("ready");
        });
        // }
    }, []);

    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel.send(message);
        setMessage("");
    };

    return (
        <>
            <div style={{ margin: "40px 0" }}>
                <textarea
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    placeholder={"u message"}
                    value={message}
                ></textarea>
                <br />
                <button
                    disabled={readyStatus !== "ready"}
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default PageChat;

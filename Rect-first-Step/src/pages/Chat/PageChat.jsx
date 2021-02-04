import React, { useEffect, useState } from "react";

const wsChannel = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const PageChat = () => {
    return (
        <div>
            <Chat />
        </div>
    );
};

const Chat = () => {
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    );
};
const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        wsChannel.addEventListener("message", (e) => {
            const newMessage = JSON.parse(e.data);
            console.log(newMessage)
            setMessages((prevMessage) => [...prevMessage, ...newMessage]);
        });
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
    // const message = {
    //     url:
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogkpiCIGN0dcD8RJ9qpDi5bE4EYYs5-_Rag&usqp=CAU",
    //     author: "Vlada",
    //     text: "Hello every",
    // };
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

const AddMessageForm = () => {
    const [message, setMessage] = useState("");
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
                disabled={wsChannel.readyState !== WebSocket.OPEN}
                onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default PageChat;

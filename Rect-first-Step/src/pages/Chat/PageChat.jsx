import React, { useEffect, useState,} from "react";
import {
    startMessagesListeningThunk,
    stopMessagesListeningThunk,
    sendMessageThunk,
} from "../../MyRedux/chat-reducer";

import { useDispatch, useSelector} from 'react-redux'

const PageChat = () => {
    return (
        <div>
            <Chat />
        </div>
    );
};

const Chat = () => {
    const dispatch = useDispatch();

    // debugger
    useEffect(() => {
        dispatch(startMessagesListeningThunk());
        // debugger

        return () => {
            dispatch(stopMessagesListeningThunk());
        };
    }, []);

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    );
};
const Messages = ({}) => {
    const messages = useSelector((state) => state.chat.messages);
console.log(messages)
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

const AddMessageForm = ({}) => {
    const [message, setMessage] = useState("");
    const [readyStatus, setReadyStatus] = useState("pending");

    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessageThunk(message));
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
                    // disabled={wsChannel === null || readyStatus !== "ready"}
                    onClick={sendMessageHandler}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default PageChat;

import React, { useEffect, useRef, useState } from "react";
import {
    startMessagesListeningThunk,
    stopMessagesListeningThunk,
    sendMessageThunk,
} from "../../MyRedux/chat-reducer";

import { useDispatch, useSelector } from "react-redux";

const PageChat = () => {
    return (
        <div>
            <Chat />
        </div>
    );
};

const Chat = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.chat.status);

    // debugger
    useEffect(() => {
        dispatch(startMessagesListeningThunk());
        // debugger

        return () => {
            dispatch(stopMessagesListeningThunk());
        };
    }, []);

    return (
        <>
            {status === "error" && (
                <div> Error! You should Refresh the Page</div>
            )}
            <div>
                <Messages />
                <AddMessageForm />
            </div>
        </>
    );
};

const Messages = ({}) => {
    const messages = useSelector((state) => state.chat.messages);
    const [autoScrollIsActiv, setAutoScrollIsActiv] = useState(true);
    const messagesAnchorRef = useRef(null);

    useEffect(() => {
        if (
            autoScrollIsActiv &&
            (messagesAnchorRef.current !== null ||
                messagesAnchorRef.current !== undefined)
        ) {
            messagesAnchorRef.current.scrollIntoView({ behavior: "smooth" });
        }
        // return () => {
        //     cleanup;
        // };
    }, [messages]);

    const scrollHandler = (e) => {
        let element = e.currentTarget;
        if (
            Math.abs(
                element.scrollHeight - element.scrollTop - element.clientHeight
            ) < 300
        ) {
            !autoScrollIsActiv && setAutoScrollIsActiv(true);
            // console.log("scrolols");
        } else {
            autoScrollIsActiv && setAutoScrollIsActiv(false);
        }
    };
    
    // console.log(messages)
    return (
        <div
        style={{ height: "450px", overflowY: "auto" }}
        onScroll={scrollHandler}
        >
            {messages.map((mess) => (
                <Message key={mess.id} message={mess} />
                ))}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

const Message = React.memo(({ message }) => {
    // console.log(message);
    console.log("scrolols12");
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
});

const AddMessageForm = ({}) => {
    const [message, setMessage] = useState("");
    // const [readyStatus, setReadyStatus] = useState("pending");
    const status = useSelector((state) => state.chat.status);

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
                    disabled={status !== "ready"}
                    onClick={sendMessageHandler}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default PageChat;

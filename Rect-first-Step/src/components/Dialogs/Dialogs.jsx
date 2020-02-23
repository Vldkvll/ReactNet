import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../MyRedux/State";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogItemData.map(dialElem => (
        <DialogItem name={dialElem.name} id={dialElem.id}/>));
    let messagesElements = props.dialogsPage.messagesData.map(messageElem => (
        <Message message={messageElem.message}/>));
    let newMessageBody = props.dialogsPage.newMessageBody;

    let newSendElement = React.createRef();

    let OnNewMessageChange = () => {
        let bodyEl = newSendElement.current.value;
        props.dispatch(updateNewMessageBodyCreator(bodyEl));

    };
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    return (
        <div className={cs.Dialogs}>
            <div className={cs.TextButtons}>
                    <textarea onChange={OnNewMessageChange} value={newMessageBody} ref={newSendElement}
                              placeholder="Enter your message"></textarea>
            <div className={cs.Buttons}>
                <button onClick={onSendMessageClick}>Send</button>
                <button>Remove</button>
            </div>
        </div>
            <div className={cs.Dialog}>
                {dialogsElements}
            </div>
            <div className={cs.Messages}>
                <div>{messagesElements}</div>

            </div>
        </div>
    );
};

export default Dialogs;
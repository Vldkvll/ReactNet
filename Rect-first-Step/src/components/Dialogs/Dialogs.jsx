import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../MyRedux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogItemData.map(dialElem => (
        <DialogItem name={dialElem.name} id={dialElem.id}/>));
    let messagesElements = state.messagesData.map(messageElem => (
        <Message message={messageElem.message}/>));
    let newMessageBody = state.newMessageBody;

    let newSendElement = React.createRef();

    let OnNewMessageChange = (event) => {
        let bodyEl = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(bodyEl));

    };
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
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
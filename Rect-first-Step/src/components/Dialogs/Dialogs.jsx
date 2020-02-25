import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    // debugger;
    let dialogsElements = state.dialogItemData.map(dialElem => (
        <DialogItem name={dialElem.name} id={dialElem.id} key={dialElem.id}/>));
    let messagesElements = state.messagesData.map(messageElem => (
        <Message message={messageElem.message} key={messageElem.id}/>));
    let newMessageBody = state.newMessageBody;

    let newSendElement = React.createRef();

    let OnNewMessageChange = (event) => {
        let bodyEl = event.target.value;
        props.updateNewMessageBody(bodyEl);
    };

    let AddNewMessage = () => {
        props.sendMessage();
    };

    return (
        <div className={cs.Dialogs}>
            <div className={cs.TextButtons}>
                    <textarea onChange={OnNewMessageChange} value={newMessageBody} ref={newSendElement}
                              placeholder="Enter your message"></textarea>
            <div className={cs.Buttons}>
                <button onClick={AddNewMessage}>Send</button>
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
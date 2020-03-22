import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogItemData.map(dialElem => (
        <DialogItem name={dialElem.name} id={dialElem.id} key={dialElem.id}/>));
    const messagesElements = state.messagesData.map(messageElem => (
        <Message message={messageElem.message} key={messageElem.id}/>));

    let newMessageBody;

    const AddNewMessage = (values) => {
        newMessageBody= values.newMessageBody;
        props.sendMessage(newMessageBody)
    };

    return (
        <div className={cs.Dialogs}>


            <div className={ cs.Dialog}>
                {dialogsElements}
            </div>
            <div className={cs.Messages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>
    );
};



const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    console.log(props);
    // let dialogItemData = [
    //     {name: "Katya", id: "1"},
    //     {name: "Dima", id: "2"},
    //     {name: "Sasha", id: "3"},
    //     {name: "Luda", id: "4"},
    //     {name: "Anna", id: "5"},
    // ];
    //
    // let messagesData = [
    //     {id:0, message: "Hi! U 'r great!!!"},
    //     {id:1, message: "Whatsup?"},
    //     {id:2, message: "Hi there!"},
    //     {id:3, message: "Fine"},
    //     {id:4, message: "Second and First"},
    // ];

    let dialogsElements = props.dialogItemData.map(dialElem => (<DialogItem name={dialElem.name} id={dialElem.id} />));
    let messagesElements = props.messagesData.map(messageElem => ( <Message message={messageElem.message}/>));

    return (
        <div className={cs.Dialogs}>
            <div className={cs.Dialog}>
                {dialogsElements}
            </div>
            <div className={cs.Messages}>
                { messagesElements }
            </div>

        </div>
    );
};

export default Dialogs;
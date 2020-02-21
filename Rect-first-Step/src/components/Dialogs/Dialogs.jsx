import React from "react";
import cs from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogItemData.map(dialElem => (
        <DialogItem name={dialElem.name} id={dialElem.id}/>));
    let messagesElements = props.dialogPage.messagesData.map(messageElem => (<Message message={messageElem.message}/>));

    let newPostElement = React.createRef();
    let addPost = () => {
        let textPost = newPostElement.current.value;
        alert(textPost);
    };

    return (
        <div className={cs.Dialogs}>

            <div className={cs.Buttons}>
                <textarea ref={newPostElement}></textarea>
                <div className={cs.buttons}>
                    <button onClick={addPost}>Add post</button>

                    <button>Remove</button>
                </div>
            </div>

            <div className={cs.Dialog}>
                {dialogsElements}
            </div>

            <div className={cs.Messages}>
                {messagesElements}
            </div>


        </div>
    );
};

export default Dialogs;
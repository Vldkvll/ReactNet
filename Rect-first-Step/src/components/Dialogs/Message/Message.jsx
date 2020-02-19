import React from "react";
import cs from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${cs.DialogItem}`}>
        <NavLink to={`/Dialogs/${props.id}`}  className={`${cs.item} ${cs.active}`}>{props.name}</NavLink>
    </div>
    )
};

const Message = (props) => {
    return (
        <div className={`${cs.Message} ${cs.active}`}>{props.message}</div>
    )
};

export default Message;
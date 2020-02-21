import React from "react";
import cs from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={`${cs.Message} ${cs.active}`}>{props.message}</div>
    )
};

export default Message;
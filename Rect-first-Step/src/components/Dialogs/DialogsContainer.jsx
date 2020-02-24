import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../MyRedux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    return (<StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let OnNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));

                };
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };
                return (
                    <Dialogs state={state}
                             updateNewMessageBody={OnNewMessageChange}
                             sendMessage={onSendMessageClick}
                    />
                )
            }
        }

        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
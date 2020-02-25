import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../MyRedux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (<StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogsPage;
//
//                 let OnNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//
//                 };
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//                 return (
//                     <Dialogs state={state}
//                              updateNewMessageBody={OnNewMessageChange}
//                              sendMessage={onSendMessageClick}
//                     />
//                 )
//             }
//         }
//
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};


const DialogsContainer =  connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
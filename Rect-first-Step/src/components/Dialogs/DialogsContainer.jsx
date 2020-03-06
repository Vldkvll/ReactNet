import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../MyRedux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return{
//         sendMessage: (newMessageBody) => {
//             dispatch(sendMessageCreator(newMessageBody));
//         },
//         // updateNewMessageBody: (body) => {
//         //     dispatch(updateNewMessageBodyCreator(body));
//         // },
//
//     }
// };

export default compose(connect(mapStateToProps,mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);

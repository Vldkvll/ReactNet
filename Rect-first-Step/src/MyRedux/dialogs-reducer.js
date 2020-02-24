const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    dialogItemData: [
        {name: "Katya", id: "1"},
        {name: "Dima", id: "2"},
        {name: "Sasha", id: "3"},
        {name: "Luda", id: "4"},
        {name: "Anna", id: "5"},
        {name: "Nastya", id: "6"},
    ],
    messagesData: [
        {id: 0, message: "Hi! U 'r great!!!"},
        {id: 1, message: "Whatsup?"},
        {id: 2, message: "Hi there!"},
        {id: 3, message: "Fine"},
        {id: 4, message: "Second and First"},
    ],
    newMessageBody: ""
};

export const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 6, message: body});
            return state;
    }
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        default:
            return state;
    };
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
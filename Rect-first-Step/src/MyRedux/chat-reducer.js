import { chatApi } from "../API/chat-api";

const MESSAGE_RECIVED = "4-buddy.net/auth/MESSAGE_RECIVED";

const initialState = {
    messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGE_RECIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            };
        default:
            return state;
    }
};

export const actions = {
    messagesRecived: (messages) => ({
        type: "MESSAGE_RECIVED",
        payload: { messages },
    }),
};

let _newMessagesHandlerCreator = null;

const newMessagesHandlerCreator = (dispatch) => {

    if (_newMessagesHandlerCreator !== null) {
        return _newMessagesHandlerCreator;
    }
    _newMessagesHandlerCreator = (messages) => {
        dispatch(actions.messagesRecived(messages));
    };

    return _newMessagesHandlerCreator;
};

export const startMessagesListeningThunk = () => async (dispatch) => {

    chatApi.start();
    chatApi.subscribe(newMessagesHandlerCreator(dispatch));
};
export const sendMessageThunk = (message) => async (dispatch) => {
    chatApi.sendMessage(message);
};

export const stopMessagesListeningThunk = () => async (dispatch) => {
    chatApi.stop();
    chatApi.unsubscribe(newMessagesHandlerCreator(dispatch));
};

export default chatReducer;

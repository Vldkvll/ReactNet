import { chatApi } from "../API/chat-api";

const MESSAGE_RECIVED = "4-buddy.net/auth/MESSAGE_RECIVED";
const STATUS_CHANGED = "4-buddy.net/auth/STATUS_CHANGED";

const initialState = {
    messages: [],
    status: 'pending',
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGE_RECIVED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            };
        case "STATUS_CHANGED":
            return {
                ...state,
                status: action.payload.status,
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
    statusChanged: (status) => ({
        type: "STATUS_CHANGED",
        payload: { status },
    }),
};

let _newMessagesHandler = null;

const newMessagesHandlerCreator = (dispatch) => {

    if (_newMessagesHandler !== null) {
        return _newMessagesHandler;
    }
    _newMessagesHandler = (messages) => {
        dispatch(actions.messagesRecived(messages));
    };
    
    return _newMessagesHandler;
};

let _statusChangedHandler = null;

const statusChangedHandlerCreator = (dispatch) => {

    if (_statusChangedHandler !== null) {
        return _statusChangedHandler;
    }
    _statusChangedHandler = (status) => {
        dispatch(actions.statusChanged(status));
    };

    return _statusChangedHandler;
};

export const startMessagesListeningThunk = () => async (dispatch) => {

    chatApi.start();
    chatApi.subscribe('message-recived', newMessagesHandlerCreator(dispatch));
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};
export const sendMessageThunk = (message) => async (dispatch) => {
    chatApi.sendMessage(message);
};

export const stopMessagesListeningThunk = () => async (dispatch) => {
    chatApi.stop();
    chatApi.unsubscribe('message-recived', newMessagesHandlerCreator(dispatch));
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export default chatReducer;

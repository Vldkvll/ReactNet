const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
                {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
                {id: 1, messenger: "I'm totally agree with you!", likesCount: " 8"},
                {id: 1, messenger: "Be marvelous!", likesCount: " 12"},
                {id: 1, messenger: "Handsome buddy!", likesCount: " 121"},
                {id: 1, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
            ],
            newPostText: "I'm the great!",
        },
        dialogsPage: {
            dialogItemData: [
                {name: "Katya", id: "1"},
                {name: "Dima", id: "2"},
                {name: "Sasha", id: "3"},
                {name: "Luda", id: "4"},
                {name: "Anna", id: "5"},
            ],
            messagesData: [
                {id: 0, message: "Hi! U 'r great!!!"},
                {id: 1, message: "Whatsup?"},
                {id: 2, message: "Hi there!"},
                {id: 3, message: "Fine"},
                {id: 4, message: "Second and First"},
            ],
            newMessageBody: ""
        },

    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("Page state was changed")
    },

    subcsribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                messenger: this._state.profilePage.newPostText,
                likesCount: " 1111111111",
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messagesData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
        ;
    }

};

window.state = store;

export default store;
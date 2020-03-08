// import profileReducer from "./profile-reducer";
// import {dialogsReducer} from "./dialogs-reducer";
// import {sidebarReducer} from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
//                 {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
//                 {id: 1, messenger: "I'm totally agree with you!", likesCount: " 8"},
//                 {id: 1, messenger: "Be marvelous!", likesCount: " 12"},
//                 {id: 1, messenger: "Handsome buddy!", likesCount: " 121"},
//                 {id: 1, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
//             ],
//             newPostText: "I'm the great!",
//         },
//         dialogsPage: {
//             dialogItemData: [
//                 {name: "Katya", id: "1"},
//                 {name: "Dima", id: "2"},
//                 {name: "Sasha", id: "3"},
//                 {name: "Luda", id: "4"},
//                 {name: "Anna", id: "5"},
//             ],
//             messagesData: [
//                 {id: 0, message: "Hi! U 'r great!!!"},
//                 {id: 1, message: "Whatsup?"},
//                 {id: 2, message: "Hi there!"},
//                 {id: 3, message: "Fine"},
//                 {id: 4, message: "Second and First"},
//             ],
//             newMessageBody: ""
//         },
//         sidebar: "",
//
//     },
//     getState() {
//         return this._state;
//     },
//
//     _callSubscriber() {
//         console.log("Page state was changed")
//     },
//
//     subcsribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage ,action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage ,action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar ,action);
//
//         this._callSubscriber(this._state);
//     }
//
// };
//
// window.state = store;
//
// export default store;
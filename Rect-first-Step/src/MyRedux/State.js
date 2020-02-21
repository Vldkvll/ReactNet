let rerenderEntireTree = () => {
  console.log("Page state was changed")
};

const state = {
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
    dialogPage: {
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
    },
    
};

export let addPost = () => {

    let newPost = {
        id: 5,
        messenger: state.profilePage.newPostText,
        likesCount: " 1111111111",
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
};

export let subcsribe = (observer) => {
    rerenderEntireTree = observer;
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

};

export default state;
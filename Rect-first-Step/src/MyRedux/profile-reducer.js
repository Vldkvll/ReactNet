const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
        {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
        {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
        {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
        {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
        {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
    ],
    newPostText: "I'm the great!",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                    id: 6,
                    messenger: state.newPostText,
                    likesCount: " 1111111111",
                };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let  stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;
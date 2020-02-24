import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../MyRedux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = () => {

    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage;
                let onAddPosts = () => {
                    store.dispatch(addPostActionCreator())
                };
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPosts posts={state.postData}
                             newPostText={store.getState().profilePage.newPostText}
                             addPosts={onAddPosts}
                             updateNewPostText={onPostChange}/>
                )
            }
            }
        </StoreContext.Consumer>

    )
};
export default MyPostsContainer;


import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../MyRedux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//
// const MyPostsContainer = () => {
//
//     return (<StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage;
//                 let onAddPosts = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 };
//
//                 return (
//                     <MyPosts posts={state.postData}
//                              newPostText={store.getState().profilePage.newPostText}
//                              addPosts={onAddPosts}
//                              updateNewPostText={onPostChange}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//
//     )
// };

const mapStateToProps = (state) => {
  return{
      profilePage: state.profilePage,
      newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
      addPosts: () => {
          dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
      },


  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;


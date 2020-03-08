import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../MyRedux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return{
      profilePage: state.profilePage,
      newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
      addPosts: (newPostText) => {
          dispatch(addPostActionCreator(newPostText));
      },
      updateNewPostText: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
      },
  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

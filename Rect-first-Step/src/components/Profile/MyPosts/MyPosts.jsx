import React from "react";
import cs from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {HandlerMyPostsForm} from "./MyPostsForm";


const MyPosts = React.memo((props) => {
    // ("I'm clever & rich.")
    let state = props.profilePage;
    let dispatch = props.dispatch;
    let postsElements = state.postData.map(postElem =>
        (<Posts messenger={postElem.messenger} likesCount={postElem.likesCount} key={postElem.id}/>));

    const onSubmit = (values) => {
        if(values) props.addPosts(values.newPostText);
    };
    return (
        <div>
            <div className={cs.textareaButtons}>
                <h3>My Posts</h3>
                <HandlerMyPostsForm onSubmit={onSubmit}/>
            </div>
            <div className={cs.post}>
                {postsElements}
            </div>
        </div>
    );
});
export default MyPosts;



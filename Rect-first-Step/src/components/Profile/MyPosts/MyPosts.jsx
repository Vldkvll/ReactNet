import React from "react";
import cs from "./MyPosts.module.css"
import Posts from "./Posts/Posts";


const MyPosts = (props) => {
    // props.addPost("I'm clever & rich.");
    let newPostElement = React.createRef();

    let addPosts = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let textPost = newPostElement.current.value;
        props.updateNewPostText(textPost);
    };

    let postsElements = props.posts.map(postElem =>
        (<Posts messenger={postElem.messenger} likesCount={postElem.likesCount}/>))
    return (
        <div>
            <div className={cs.textareaButtons}>
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                    <div className={cs.buttons}>
                        <button onClick={addPosts}>Add post</button>

                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={cs.post}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;

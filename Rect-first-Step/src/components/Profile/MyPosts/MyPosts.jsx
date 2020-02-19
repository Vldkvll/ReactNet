import React from "react";
import cs from "./MyPosts.module.css"
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    return (
        <div>
            <div className={cs.textareaButtons}>
                <h3>My Posts</h3>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={cs.post}>
                { props.postsElements }
            </div>
        </div>
    );
};

export default MyPosts;

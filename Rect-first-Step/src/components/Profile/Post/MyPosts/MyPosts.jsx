import React from "react";
import cs from "./MyPosts.module.css"
import Posts from "../Posts";

const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={cs.post}>
                <Posts messenger="Hello I'm very glad 2 see u!" likesCount=" 15"/>
                <Posts messenger="Totally I'll be a nice developer!" likesCount=" 111"/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    );
};

export default MyPosts;

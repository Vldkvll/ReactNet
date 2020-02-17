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
     	 <Posts />
    	</div>
    </div>
  );
};

export default MyPosts;

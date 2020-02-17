import React from "react";
import cs from "./Posts.module.css"

const Posts = () => {
  return (
    	  <div className={cs.item}>
		  	<img src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png" alt="ava"/>
			  Post 1
			  <div>
				  <span>LIKE!</span>
			  </div>
		  </div>
  );
};

export default Posts;

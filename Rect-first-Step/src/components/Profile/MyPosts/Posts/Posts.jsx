import React from "react";
import cs from "./Posts.module.css"

const Posts = (props) => {
  return (
    	  <div className={cs.item}>
		  	<img src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png" alt="ava"/>
			  {props.messenger}
			  <div>
				  <span>LIKE!</span>{props.likesCount}
			  </div>
		  </div>
  );
};

export default Posts;

import React from "react";

const Profile = () => {
  return (
    <div className="content">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg"
            alt="social"
          ></img>
        </div>
        <div>
          Ava + Descrition
          {/* <img src='https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png' alt="social"></img>   */}
        </div>
        <div>
          my posts
          <div>New Post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
  );
};

export default Profile;

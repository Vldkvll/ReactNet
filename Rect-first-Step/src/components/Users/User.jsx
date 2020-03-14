import React from "react";
import cs from "./Users.module.css";
import userPhoto from "../../assets/images/avaIndianGirl.jpg"
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={cs.users}>
                    <span>
                        <div className={cs.imgUsers}>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto} alt="ava"/>
                            </NavLink>
                        </div>

                        <div>
                            {user.followed
                                ?   <button key={user.id}
                                          disabled={followingInProgress.some( id => id === user.id )}
                                          onClick={() => {unfollow(user.id)}}>
                                    unfollow
                                    </button>

                                :   <button  key={user.id}
                                           disabled={followingInProgress.some( id => id === user.id )}
                                          onClick={() => {
                                              follow(user.id)}}>
                                    follow
                                    </button>}

                        </div>
                    </span>
                            <span>
                        <span>
                            <div>
                                {user.name}
                        </div>
                            <div>
                                {user.status}
                            </div>
                        </span>

                        <span>
                            <div>
                                {user.id}
                                {/*{location.country}*/}
                            </div>
                            <div>
                                {user.followed}
                                {/*{user.location.city}*/}
                            </div>
                        </span>

                    </span>
                        </div>
    )
};

export default User;
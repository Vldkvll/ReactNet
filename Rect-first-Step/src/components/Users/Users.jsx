import React from "react";
import cs from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
       return (
        <div className={cs.users}>

            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChange={props.onPageChange}
            />
                {
                    props.users.map(user => <User
                            user={user}
                            key={user.id}
                            followingInProgress={props.followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />)
                }
            </div>
    );
}

export default Users;
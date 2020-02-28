import React from "react";
import cs from "./Users.module.css";
import userPhoto from "../../assets/images/avaIndianGirl.jpg"

let Users = (props) => {
        let pageCount = Math.ceil(+props.totalUsersCount  / +props.pageSize);

        let pages = [ ];
        for (let i=1; i<= pageCount; i++){
            pages.push(i);
        }
        return (
            <div className={cs.users}>

                <div>
                    {pages.map( (page) =>
                        (<span className={props.currentPage === page ? cs.selectedPage : cs.unselectedPage }
                               onClick={ (event) => { props.onPageChange(page) } }> {page}  </span>) )}

                    {
                        props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={cs.imgUsers}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava"/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>follow</button>}

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
                    }
                </div>
            </div>
        );
    }

export default Users;
import React from "react";
import {connect} from "react-redux";
import {
    follow, getUserThunkCreator,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../MyRedux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersComponent extends React.Component {
    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalCount(data.totalCount);
        //     });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunk(pageNumber, this.props.pageSize);

        // UserAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items)
        //     });
    }

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChange={this.onPageChange}
                   followingInProgress={this.props.followingInProgress}
            />

        </>
    }


}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsersThunk: getUserThunkCreator,
        }
    ),
    withAuthRedirect
)(UsersComponent)


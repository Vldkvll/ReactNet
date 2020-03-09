import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUserThunkCreator,
    toggleFollowingProgress, unfollow,
} from "../../MyRedux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getSuperUsersSelector,
    getTotalUsersCount,
    getUsers
} from "../../MyRedux/user-selectors";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    };

    onPageChange = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    };

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
        users: getSuperUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps,
        {
            unfollow,
            follow,
            toggleFollowingProgress,
            getUsersThunk: getUserThunkCreator,
        }
    ),
    // withAuthRedirect
)(UsersComponent)


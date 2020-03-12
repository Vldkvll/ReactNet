import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusUsers, getUserProfile, updateStatus} from "../../MyRedux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.AuthorizedId;
                if (!userId){
                    this.props.history.push("/login");
                }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusUsers(userId);
    };

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {

        return <>
            <div>
                <Profile {...this.props} profile={this.props.profileFromState}
                         status={this.props.statusFromState}
                         updateStatus={ this.props.updateStatus}/>
            </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profileFromState: state.profilePage.profile,
        statusFromState: state.profilePage.status,
        AuthorizedId: state.auth.usersId,
        isAuthFromState: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusUsers, updateStatus,}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



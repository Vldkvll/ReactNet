import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusUsers, getUserProfile, updateStatus} from "../../MyRedux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = "2";
        }

        this.props.getUserProfile(userId);
        this.props.getStatusUsers(userId);
    }

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {

        return <>
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={ this.props.updateStatus}/>
            </div>

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatusUsers, updateStatus,}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);



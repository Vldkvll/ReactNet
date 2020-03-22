import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusUsers, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../MyRedux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    refreshProfilePage() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.AuthorizedId;
            if (!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusUsers(userId);
    }
    componentDidMount() {
       this.refreshProfilePage();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfilePage();
    }

    render() {
        return <>
            <div>
                <Profile {...this.props}
                         savePhoto={this.props.savePhoto}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profileFromState}
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
    connect(mapStateToProps,
        {getUserProfile, getStatusUsers, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



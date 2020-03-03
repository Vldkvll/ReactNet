import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../MyRedux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = "2";
        }
                this.props.getUserProfile(userId);
    }

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {
        if(this.props.isAuth===false) return <Redirect to={"/login"} />;
        return <>
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        </>
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps,
    {getUserProfile}
)(withUrlDataContainerComponent);
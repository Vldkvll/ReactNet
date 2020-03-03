import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../MyRedux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

        return <>
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



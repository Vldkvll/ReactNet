
import React, {Suspense} from "react";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./MyRedux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initializeFromState) {
            return < Preloader/>
        }
        return (
            <div className="app-wrapper">
                <div className="app-header">
                    <HeaderContainer/>
                </div>

                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => {
                        return <div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <section>
                                    <ProfileContainer/>
                                </section>
                            </Suspense>
                        </div>
                    }}/>
                    <Route path="/login" render={() => {
                        return withSuspense(<LoginPage/>)
                    }}/>
                    <Route path="/dialogs" render={() => {
                        return withSuspense(<DialogsContainer/>)
                    }}/>
                    <Route path="/users" render={() => (<UsersContainer/>)}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/sidebar" component={Sidebar}/>
                </div>
            </div>

        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initializeFromState: state.app.initialized
});

export default compose(withRouter(connect(mapStateToProps, {initializeApp})(App)));






import React, {lazy, Suspense} from "react";
import "./App.css";
import {Route, Router, Switch, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./MyRedux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const LoginPage = lazy(() => import('./Login/login'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initializeFromState) {
            return < Preloader/>
        }
        return (
            <div className="app-wrapper">
                <div className="app-header"><HeaderContainer/></div>

                <Navbar/>
                <div className="app-wrapper-content">
                    <Router>
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Switch>
                                <Route path="/profile/:userId?" render={() => (<ProfileContainer/>)}/>
                                <Route path="/login" render={() => (<LoginPage/>)}/>
                                <Route path="/dialogs" render={() => (<DialogsContainer/>)}/>
                                <Route path="/users" render={() => (<UsersContainer/>)}/>
                                {/*<Route path="/settings" render={Settings}/>*/}
                                {/*<Route path="/news" component={News}/>*/}
                                {/*<Route path="/music" component={Music}/>*/}
                                {/*<Route path="/sidebar" component={Sidebar}/>*/}
                            </Switch>
                        </Suspense>
                    </Router>
                </div>
            </div>

        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initializeFromState: state.app.initialized
});

export default compose(withRouter(connect(mapStateToProps, {initializeApp})(App)));


///////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusUsers, getUserProfile, updateStatus} from "../../MyRedux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    refreshProfilePage() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.AuthorizedId;
            if (!userId) {
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
        // if (this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfilePage();

    }

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {
        const {profileFromState, statusFromState, updateStatus} = this.props
        return <>
            <div>
                <Profile
                    profile={profileFromState}
                    status={statusFromState}
                    updateStatus={updateStatus}/>
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




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
const PageChat = React.lazy(() => import('./pages/Chat/PageChat'));

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
                    <Route path="/login" render={withSuspense(LoginPage)}/>
                    <Route path="/chat" render={withSuspense(PageChat)}/>
                    <Route path="/dialogs" render={ withSuspense(DialogsContainer)
                    }/>
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

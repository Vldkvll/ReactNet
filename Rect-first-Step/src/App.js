import React from "react";
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./MyRedux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


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
                    <Route path="/profile/:userId?" render={() => (<ProfileContainer/>)}/>
                    <Route path="/login" render={() => (<LoginPage/>)}/>
                    <Route path="/dialogs" render={() => (<DialogsContainer/>)}/>
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
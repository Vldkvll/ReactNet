import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => (<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />)}/>
                    <Route path="/dialogs" render={() => (<Dialogs
                        store={props.store}/>)}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/sidebar" component={Sidebar}/>
                </div>
            </div>

    )
        ;
};

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/profile" render={Profile}/>*/}
                    <Route path="/profile" render={() =>(<Profile postsElements={props.postsElements} />)}/>
                    <Route path="/dialogs" render={() => (<Dialogs dialogItemData={props.dialogItemData} messagesData={props.messagesData} />)}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
};

export default App;

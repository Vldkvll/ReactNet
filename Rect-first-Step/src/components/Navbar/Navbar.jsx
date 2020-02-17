import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to="/Profile" activeClassName={classes.active} className={classes.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" activeClassName={classes.active} className={classes.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="News" activeClassName={classes.active} className={classes.item}>News</NavLink>
            </div>
            <div>
                <NavLink to="Music" activeClassName={classes.active} className={classes.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to="Settings" activeClassName={classes.active} className={classes.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

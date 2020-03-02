import React from "react";
import cs from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cs.header}>
            <div className={cs.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to="/Login" className={cs.navlink}>Login</NavLink>}
            </div>
            <img
                src="https://cdn.pixabay.com/photo/2014/04/03/11/49/fire-312260_960_720.png"
                alt="logo">
            </img>
        </header>
    );
};

export default Header;


import React from "react";
import cs from "./Header.module.css";

const Header = () => {
  return (
    <header className={cs.header}>
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/11/49/fire-312260_960_720.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;

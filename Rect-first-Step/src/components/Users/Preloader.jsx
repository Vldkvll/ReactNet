import React from "react";
import cs from "./Preloader.module.css";
import loaderPhoto from "../../assets/icon/DoubleRingPreloader_64px.svg";

let Preloader = (props) => {
    return (
        <div>
            <img src={loaderPhoto} className={cs.preloader}/>
        </div>
    );
}

export default Preloader;
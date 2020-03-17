import React from "react";
import style from "./ProfileInfo.module.css"


const Input = ({onPhotoProfileSelect}) => {
    return (
        <>
            <input
                onChange={onPhotoProfileSelect}
                type="file"
                // className="form-control-file "
                id="file-input"
            />

            {/*<label*/}
            {/*    htmlFor="file-input"*/}
            {/*    // className={style.labelInputImg}*/}
            {/*>*/}
            {/*</label>*/}
        </>
    )
};

export default Input;
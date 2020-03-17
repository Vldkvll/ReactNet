import React, {useEffect, useState} from "react";
import cs from "./ProfileInfo.module.css"

const ProfileStatusWithHook = (props) => {

    // let stateWithSetstate = useState(false);
    // let editMode = stateWithSetstate[0];
    // let setEditMode = stateWithSetstate[1];
    // Or // Destructuring Assignment

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)

    };

    return (
        <>
            {!editMode &&
            <div className={cs.profileStatus}>
                    <span
                        className={cs.profileStatusSpan}
                        key={"unique"}
                          onDoubleClick={activateEditMode}>
                        {props.status || "-------"}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input key={"unique2"}
                       onChange={onStatusChange}
                       onBlur={deActivateEditMode}
                       autoFocus={true}
                       value={status}/>
            </div>
            }
        </>
    );
}
export default ProfileStatusWithHook;


import React, {useState} from "react";
import cs from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import Preloader from "../../Common/Preloader/Preloader";
import Input from "./Input";
import {ProfileDataFormRedux} from "./ProfileDataForm";
// import photoAva from "../../../assets/images/aVaSummer.png"

const ProfileInfo = ({profile, isOwner, saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }
    let photoAva = 'https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png'

    const onPhotoProfileSelect = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };

    return (
        <div>
            <div className={`${cs.item}`}>
                <div className={`${cs.ava}`}>
                    <img

                        src={(profile && ((profile.photos.large != null) || (profile.photos.small != null)))
                            ? profile.photos.large || profile.photos.small
                            : photoAva}
                        alt="Profile ava"/>
                    {isOwner &&
                    <Input onPhotoProfileSelect={onPhotoProfileSelect}/>
                    }

                    <div className={cs.profileStatus}>
                        <div>
                            <ProfileStatusWithHook
                                status={props.status}
                                updateStatus={props.updateStatus}
                            />
                        </div>
                    </div>
                </div>

                {editMode
                    ? (<ProfileDataFormRedux initialValues={profile}
                                             profile={profile}
                                             onSubmit={onSubmit}
                    />)
                    : (<ProfileData profile={profile}
                                    isOwner={isOwner}
                                    goToEditMode={() => setEditMode(true)}
                    />)
                }
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode} className={`btn btn-outline-primary ${cs.buttonMod}`}>Edit</button>
            </div>}
            <div className={cs.profile}>
                <b className={cs.profileB}> Personality:</b>
                <div><b className={cs.contactTitle}>Name - </b> {!profile
                    ? ""
                    : profile.fullName}
                </div>
                <div><b className={cs.contactTitle}>About Me: </b> {!profile
                    ? "" : profile.aboutMe}
                </div>
                <div><b className={cs.contactTitle}>Github - </b> {!profile ? ""
                    : profile.contacts.github}
                </div>
                <div><b className={cs.contactTitle}>User Id: </b>{!profile
                    ? ""
                    : `${profile.userId}`}
                </div>
                <div><b className={cs.contactTitle}>Looking for a Job</b> {!profile.lookingForAJob
                    ?
                    " - Did you really find a job? ?!"
                    : "- Sure, of course!!"}
                </div>
                <div> {profile.lookingForAJob &&
                <div>
                    <b className={cs.contactTitle}> My skills: </b> {profile.lookingForAJobDescription}
                </div>
                }
                </div>
            </div>

            <div className={cs.contacts}>
                <b className={cs.profileB}> My Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return (
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={cs.contactsB}><b
        className={cs.contactTitle}>{contactTitle}: </b>{contactValue}</div>
};

export default ProfileInfo;
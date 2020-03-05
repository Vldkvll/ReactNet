import React from "react";
import cs from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";
// import photoAva from "../../../assets/images/aVaSummer.png"

const ProfileInfo = (props) => {
    // if (!props.profile){
    //     return <Preloader />;
    // }
    let photoAva = 'https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png'

    let lorem =' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam qui debitis omnis, reprehenderit\n' +
        '                    sapiente ad quos. Expedita harum molestiae nulla sit in earum culpa corporis. Facilis voluptate et\n' +
        '                    nobis atque!';
    let profile = props.profile;

    return (
        <div>
            <div className={`${cs.item}`}>
                <div className={cs.ava}>
                    <img src ={ (profile && ((profile.photos.large != null) || (profile.photos.small != null)))
                        ? profile.photos.large || profile.photos.small
                        : photoAva }
                         alt="Profile ava"></img>
                </div>
                <div className={cs.profile}>
                    { !profile ? lorem : props.profile.fullName}
                    <br/><br/>
                    { !profile ? lorem : props.profile.aboutMe}
                    <br/><br/>
                    { !profile ? lorem : props.profile.contacts.github}
                </div>
                <div className={cs.profileStatus}>

                <div> <ProfileStatus status={props.status} updateStatus={props.updateStatus} /></div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;
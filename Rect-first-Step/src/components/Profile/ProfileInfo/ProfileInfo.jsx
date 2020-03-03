import React from "react";
import cs from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    // if (!props.profile){
    //     return <Preloader />;
    // }
    let lorem =' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam qui debitis omnis, reprehenderit\n' +
        '                    sapiente ad quos. Expedita harum molestiae nulla sit in earum culpa corporis. Facilis voluptate et\n' +
        '                    nobis atque!';
    let profile = props.profile;

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg"*/}
                {/*    alt="social"*/}
                {/*></img>*/}
            </div>
            <div className={`${cs.item} ${cs.descriptionBlock}`}>
                <div className={cs.ava}>
                    <img src ={ !profile
                        ? 'https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png'
                        : profile.photos.large}
                         alt="Profile ava"></img>
                </div>
                <div className={cs.profile}>
                    { !profile ? lorem : props.profile.fullName}
                    <br/><br/>
                    { !profile ? lorem : props.profile.aboutMe}
                    <br/><br/>
                    { !profile ? lorem : props.profile.contacts.github}
                </div>
                <div className={cs.profile}>


                </div>

            </div>


        </div>
    );
};

export default ProfileInfo;

// <div>
//     <img
//         src="https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_960_720.jpg"
//         alt="social"
//     ></img>
// </div>
// <div className={`${cs.item} ${cs.descriptionBlock}`}>
// <div className={cs.ava}>
//     <img src='https://cdn.pixabay.com/photo/2020/02/11/14/10/summer-4839685_960_720.png'
// alt="social"></img>
// </div>
// <div className={cs.profile}>
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam qui debitis omnis, reprehenderit
// sapiente ad quos. Expedita harum molestiae nulla sit in earum culpa corporis. Facilis voluptate et
// nobis atque!
// </div>
// </div>

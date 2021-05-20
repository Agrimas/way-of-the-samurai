import React, {useState} from "react";
import Classes from './ProfileInfo.module.css'
import Status from './ProfileStatus/ProfileStatus'
import defaultAvatar from '../../../assets/img/user.jpg';
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfileInfo}) => {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfileInfo(formData).then((response) => {
            if (response) {
                setEditMode(false)
            }
        })
    }

    return (
        <div style={{margin: '10px 0'}}>
            <img className={Classes.photo} src="https://c.wallhere.com/photos/51/ec/landscape-81752.jpg!d"
                 alt="main-img"/>

            <div className={Classes.wrapperAvatar}>
                <div className={Classes.wrapperImage}>
                    <img src={profile.photos?.small ?? defaultAvatar} alt=""
                         className={Classes.avatar}/>
                </div>
                {isOwner && <div className={Classes.input_wrapper}>
                    <input className={Classes.input_file} type={'file'} onChange={(event) => {
                        if (event.target.files.length) {
                            savePhoto(event.target.files[0]);
                        }
                    }}/>
                    <label htmlFor="input__file" className={Classes.input_file_button}>
                        <span className={Classes.input_file_button_text}>Выберите файл</span>
                    </label>
                </div>}
            </div>

            {editMode ?
                <ProfileDataForm
                    profile={profile}
                    onSubmit={onSubmit}
                /> :
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => {
                        setEditMode(true)
                    }}
                />}

            <Status status={status} updateStatus={updateStatus}/>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={Classes.container}>
            <div className={Classes.info}>
                {isOwner && <button onClick={goToEditMode}>Edit</button>}
                <h1 className={Classes.description}>
                    {profile.fullName}
                </h1>
                <div>

                    <p><b>looking for a Job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
                    {profile.lookingForAJob &&
                    <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>
                    }

                    <p><b>About me</b>: {profile.aboutMe}</p>

                    <div>
                        {Object.keys(profile.contacts).map(contact => {
                                return <Contact key={contact} title={contact}
                                                value={profile.contacts[contact]}/>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

const Contact = ({title, value}) => {
    return (<div><b>{title}</b>: {value}</div>);
}


export default ProfileInfo;
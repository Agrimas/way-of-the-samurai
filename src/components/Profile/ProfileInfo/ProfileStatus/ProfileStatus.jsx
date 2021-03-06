import React, {useEffect, useState} from 'react';


function ProfileStatus(props) {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        if (editMode !== props.status) {
            props.updateStatus(status);
        }
    }

    const updateStatusHandler = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <>
            {editMode ?
                <input autoFocus={true} onBlur={deactivateEditMode}
                       onChange={updateStatusHandler}
                       type="text"
                       value={status}/> :
                <span
                    onDoubleClick={activateEditMode} style={{border: '2px solid black'}}>{props.status || 'Статус пуст'}</span>
            }
        </>
    );
}

export default ProfileStatus;
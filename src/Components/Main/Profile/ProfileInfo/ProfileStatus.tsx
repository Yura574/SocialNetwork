import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div> status: {!editMode
            ? <span><span onDoubleClick={activateEditMode}>
                    {status
                        ? status
                        : "введите статус"}</span></span>
            :
            <span><input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                        value={status}/></span>}
        </div>
    )
}

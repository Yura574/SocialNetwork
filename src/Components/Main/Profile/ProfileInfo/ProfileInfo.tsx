import React, {ChangeEvent, useState} from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType, setStatus, updateStatus} from "../../../../Redux/profileReducer";
import SuperInputText from "../../../../CommonComponents/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../../Redux/redux-store";
import s from './ProfileInfo.module.css'

type DescriptionType = {
    profile: ProfileType | null


}

export function ProfileInfo(props: DescriptionType) {
    const dispatch = useDispatch()
    const status = useSelector<StoreType, string>(state => state.profilePage.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState(status)



    const activateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)

    }

    const deactivateEditMode = (status: string) => {
        dispatch(updateStatus(status))
        setEditMode(false)
    }
   const  handleFocus = (event: any) => {
        event.target.select();
   }
    return (

        <div>
            <div>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
                    alt="img" className={classes.image}/>
            </div>
            <div className={classes.description}>
                <div>{props.profile?.photos.large
                    ? <img src={props.profile?.photos.large } alt={'avatar'}/>
                :<img  className={s.image} src={'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'} alt={'avatar'}/>}
                </div>
                <div>
                    <div>{props.profile?.fullName}</div>
                    <div>{props.profile?.lookingForAJob}</div>
                    <div>{props.profile?.lookingForAJobDescription}</div>
                    <div>
                        {editMode
                            ? <div><SuperInputText
                                autoFocus
                                onFocus={handleFocus}
                                onBlur={() => deactivateEditMode(value)}
                                value={value}
                                onChange={activateEditMode}
                            /></div>
                            : <div onClick={() => setEditMode(true)}>{status ? status : 'enter status'}</div>}</div>
                    <div><h3>contacts:</h3>contacts:
                        <div> vk:
                            <a href={props.profile?.contacts.vk}>{props.profile?.contacts.vk} </a>
                        </div>
                        <div> GitHub:
                            <a href={props.profile?.contacts.github}>{props.profile?.contacts.github} </a>
                        </div>
                        <div> YouTube:
                            <a href={props.profile?.contacts.youtube}>{props.profile?.contacts.youtube} </a>
                        </div>
                        <div> Instagram:
                            <a href={props.profile?.contacts.instagram}>{props.profile?.contacts.instagram} </a>
                        </div>
                        <div> Twitter:
                            <a href={props.profile?.contacts.twitter}>{props.profile?.contacts.twitter} </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
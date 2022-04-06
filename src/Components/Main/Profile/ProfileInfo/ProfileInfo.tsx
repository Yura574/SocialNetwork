import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../Redux/profileReducer";

type DescriptionType = {
    profile: ProfileType | null


}

export function ProfileInfo(props: DescriptionType) {
    return (

        <div>
            <div>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
                    alt="img" className={classes.image}/>
            </div>
            <div className={classes.description}>
                <div><img src={props.profile?.photos.large} alt={'avatar'}/></div>
                <div>
                    <div>{props.profile?.fullName}</div>
                    <div>{props.profile?.lookingForAJob}</div>
                    <div>{props.profile?.lookingForAJobDescription}</div>
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
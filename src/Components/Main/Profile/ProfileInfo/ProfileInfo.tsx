import React from "react";
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../../../common/preloader/Preloader";
import {ProfileUserType} from "../ProfileContainer";
import lookingJob from "../../../../assets/images/looking-for-job.jpg"
import dontLookingJob from "../../../../assets/images/I-don-t-want-a-job-I-just-want-money.jpg"
import {Redirect} from "react-router";

type ProfileInfoType = {
    profile: ProfileUserType | null
}

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
                    alt="img" className={classes.image}/>
            </div>
            <div className={classes.description}>
                <img className={classes.ava} src={props.profile.photos.large} alt={'avatar'}/>
                <div className={classes.profileData}>
                    <div>My name: {props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div className={classes.contacts}>
                        <div>contacts:</div>
                        <div className={classes.contactsItems}>
                            <div><a
                                href={`https://${props.profile.contacts.facebook}`}>{props.profile.contacts.facebook}</a>
                            </div>
                            <div><a href={`https://${props.profile.contacts.vk}`}>{props.profile.contacts.vk}</a></div>
                            <div><a
                                href={`https://${props.profile.contacts.twitter}`}>{props.profile.contacts.twitter}</a>
                            </div>
                            <div><a
                                href={`https://${props.profile.contacts.instagram}`}>{props.profile.contacts.instagram}</a>
                            </div>
                            <div><a
                                href={`https://${props.profile.contacts.youtube}`}>{props.profile.contacts.youtube}</a>
                            </div>
                            <div><a
                                href={`https://${props.profile.contacts.github}`}>{props.profile.contacts.github}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Looking job: {props.profile.lookingForAJob
                            ? <img src={lookingJob} alt={'job'} className={classes.imageJob}/>
                            : <img src={dontLookingJob} alt={'dont job'} className={classes.imageJob}/>
                        }</div>
                        <div>Looking job: {props.profile.lookingForAJobDescription}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
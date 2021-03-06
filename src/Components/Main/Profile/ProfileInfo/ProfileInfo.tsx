import React from "react";
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../../../common/preloader/Preloader";
import {ProfileUserType} from "../ProfileContainer";
import lookingJob from "../../../../assets/images/looking-for-job.jpg"
import dontLookingJob from "../../../../assets/images/I-don-t-want-a-job-I-just-want-money.jpg"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.description}>
                <img className={classes.ava}
                     src={props.profile.photos.large
                         ? props.profile.photos.large
                         : 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'} alt={'avatar'}/>

                <div className={classes.profileData}>
                    <div>My name: {props.profile.fullName}</div>

                    <ProfileStatus status={props.status} updateStatus={props.updateStatus  }/>

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
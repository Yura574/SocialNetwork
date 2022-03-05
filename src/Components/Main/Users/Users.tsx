import React from "react";
import {UsersType} from "./UsersContainer";
import classes from './User.module.css'
import axios from 'axios'

export function Users(props: UsersType) {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data => {

                props.setUsers(data.data.items)
            }
        )
    }


    return (
        <div className={classes.body}>
            <button>Get users</button>
            <div onClick={() => {
            }}>Users
            </div>
            <div>{props.users.map(u =>
                <div>
                    <div className={classes.avatarBlock}>
                        <div className={classes.userAvatar}>
                            <img src={u.photos.small
                                ? u.photos.small
                                : 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg'}
                                 alt={'avatar'} className={classes.avatar}/>
                            <button onClick={() => {
                                u.followed ? props.follow(u.id) : props.unfollow(u.id)
                            }}>
                                {u.followed ? 'follow' : 'unfollow'}
                            </button>
                        </div>
                        <div className={classes.userInfo}>
                            <div className={classes.userName}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={classes.userLocation}>

                            </div>
                        </div>
                    </div>

                </div>
            )}</div>
        </div>
    )
}
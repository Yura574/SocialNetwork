import React from "react";
import {UsersType} from "./UsersContainer";
import classes from './User.module.css'

export function Users(props: UsersType) {

    const user = [
        {
            id: 1, avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
            followed: false, name: 'Yura', status: `I'am futured proger`, location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 2, avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
            followed: false, name: 'Sasha', status: `I'am futured proger`, location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 3,
            avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
            followed: false,
            name: 'Alenka',
            status: `I'am futured proger`,
            location: {city: 'Minsk', country: 'Belarus'},
        }]


    return (
        <div className={classes.body}>
            <button onClick={() => props.setUsers(user)}>Get users</button>
            <div>Users</div>
            <div>{props.users.map(u =>
                <div>
                    <div className={classes.avatarBlock}>
                        <div className={classes.userAvatar}>
                            <img src={u.avatar} alt={'avatar'} className={classes.avatar}/>
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
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>

                </div>
            )}</div>
        </div>
    )
}
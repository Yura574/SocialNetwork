import React from "react";
import {UserType} from "../../../Redux/users_reducer";
import classes from './UserPage.module.css'

type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersType) {
// const name = props.users.map( n => n.name)
    return (
        <div>
            <div>Users</div>
            <div>
                <div>
                    {props.users.map(u => {
                        return <div className={classes.users}>
                            <div className={classes.follow}><img src={u.photo} alt={'avatar'} className={classes.img}/>
                                <button onClick={() => props.follow(u.id)}>follow</button>
                            </div>
                            <div className={classes.descriptionFollows}>
                                <div className={classes.name}>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
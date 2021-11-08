import axios from "axios";
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
    debugger

    if (props.users.length === 0) {
        debugger
axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    props.setUsers
})
    }

    return (
        <div>
            <div>Users</div>
            <div>
                <div>
                    {props.users.map(u => {
                        return <div key={u.id} className={classes.users}>
                            <div className={classes.follow}><img src={u.photo} alt={'avatar'} className={classes.img}/>
                                {u.follow
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Follow</button>
                                    : <button onClick={() => props.follow(u.id)}>Unfollow</button>}
                            </div>
                            <div className={classes.descriptionFollows}>
                                <div className={classes.nameInform}>
                                    <div className={classes.name}>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                    </div>
                                    <div>
                                        <div>
                                            {'u.location.city'}
                                        </div>
                                        <div>
                                            {'u.location.country'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
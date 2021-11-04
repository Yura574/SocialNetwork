import React from "react";
import { UserType} from "../../../Redux/users_reducer";
import classes from './UserPage.module.css'

type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersType) {

    return (
        <div>
            <div>Users</div>
            <div>
                <div>
                    {props.users.map(u => {
                        return <div>
                            <div><img src={u.photo} alt={'avatar'} className={classes.img}/></div>
                            <button onClick={()=> props.follow(u.id)}>follow</button>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
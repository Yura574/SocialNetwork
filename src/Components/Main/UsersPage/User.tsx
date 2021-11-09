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

export class Users extends React.Component <UsersType> {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        console.log('sd')
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                <div>
                    <div>
                        {this.props.users.map(u => <div key={u.id} className={classes.users}>
                                <div className={classes.follow}>
                                    <img
                                        src={u.photo != null ? u.photo : 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
                                        alt={'avatar'} className={classes.img}/>
                                    {u.follow
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
                        )}
                    </div>
                </div>

            </div>
        )
    }
}
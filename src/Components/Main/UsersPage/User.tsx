import axios from "axios";
import React from "react";
import {UserType} from "../../../Redux/users_reducer";
import classes from './UserPage.module.css'


type UsersType = {
    users: Array<UserType>
    followed: (userId: number) => void
    unfollowed: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component <UsersType> {

    componentDidMount() {
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
                <div>
                    <div>
                        {this.props.users.map(u => <div key={u.id} className={classes.users}>
                                <div className={classes.follow}>
                                    <img
                                        src={u.photos.small != null ? u.photos.small : 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
                                        alt={'avatar'} className={classes.img}/>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollowed(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => this.props.followed(u.id)}>Follow</button>}
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
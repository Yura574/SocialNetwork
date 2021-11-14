import classes from "./UserPage.module.css";
import React from "react";
import {UserType} from "../../../Redux/users_reducer";

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onChangePage: (page: number) => void
}

export function Users (props: UsersType) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++){
        page.push(i)
    }

    return (
        <div>
            <div>
                { page.map( p => {
                    return <span onClick={()=> {props.onChangePage(p) } } className={props.currentPage === p ? classes.currentUsersPage : classes.usersPage}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={classes.users}>
                    <div className={classes.follow}>
                        <img
                            src={u.photos.small != null ? u.photos.small : 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
                            alt={'avatar'} className={classes.img}/>
                        {u.follow
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
    )
}
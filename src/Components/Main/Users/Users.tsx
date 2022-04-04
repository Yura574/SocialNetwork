import {UsersAPIComponentType} from "./UsersContainer";
import classes from "./User.module.css";
import React from "react";
import {UserType} from "../../../Redux/userReducer";

type UsersType ={
    totalUserCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (page:number)=> void
    users: UserType[]
    follow: (id: number)=> void
    unfollow: (id: number)=> void

}

export const Users =(props: UsersType) => {
    let pageNumber = []
    let page = Math.ceil(props.totalUserCount / props.pageSize)
    for (let i = 1; i <= page ; i++) {
        pageNumber.push(i)
    }
    return (

        <div className={classes.body}>
            <h1>Users</h1>
            {pageNumber.map((el, index) =>
                props.currentPage === el
                    ? <span key={index} className={classes.currentPage}> {el}</span >
                    :  <span key={index} onClick={() => props.changeCurrentPage(el)}> {el}</span>)}

            <div>{props.users.map((u,index) =>
                <div key={index}>
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
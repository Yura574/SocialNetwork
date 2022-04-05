import classes from "./User.module.css";
import React from "react";
import {UserType} from "../../../Redux/userReducer";
import {Preloader} from "../../../preloder/Preloader";
import { NavLink } from "react-router-dom";

type UsersType ={
    totalUserCount: number
    pageSize: number
    currentPage: number
    changeCurrentPage: (page:number)=> void
    users: UserType[]
    follow: (id: number)=> void
    unfollow: (id: number)=> void
    preloader: boolean

}

export const Users =(props: UsersType) => {
    let pageNumber = []
    let page = Math.ceil(props.totalUserCount / props.pageSize)
    for (let i = 1; i <= page ; i++) {
        pageNumber.push(i)
    }
    return (

        <div className={classes.body}>
           <div>{props.preloader &&<Preloader/>}</div>
            <h1>Users</h1>
            {pageNumber.map((el, index) =>
                props.currentPage === el
                    ? <span key={index} className={classes.currentPage}> {el}</span >
                    :  <span key={index} onClick={() => props.changeCurrentPage(el)}> {el}</span>)}

            <div>{props.users.map((u,index) =>
                <div key={index}>
                    <div className={classes.avatarBlock}>
                        <div className={classes.userAvatar}>
                            <NavLink to={`profile/${u.id}`}>
                            <img src={u.photos.small
                                ? u.photos.small
                                : 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg'}
                                 alt={'avatar'} className={classes.avatar}/>
                        </NavLink>
                            {u.followed
                                ?<button disabled={props.preloader && true} onClick={() => props.unfollow(u.id)}>follow</button>
                                : <button disabled={props.preloader && true}  onClick={() => props.follow(u.id)}>unfollow</button>
                                // : <button onClick={() => props.unfollow(u.id)}>follow</button>
                            }
                            {/*<button onClick={() => {*/}
                            {/*    u.followed ? props.unfollow(u.id) :  props.follow(u.id)*/}
                            {/*}}>*/}
                            {/*    {u.followed ?  'follow' : 'unfollow'}*/}
                            {/*</button>*/}
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
import React from "react";
import {UsersType} from "./UsersContainer";
import classes from './User.module.css'
import axios from 'axios'

export class Users extends React.Component<UsersType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.setTotalUserCount(data.data.totalCount)
                console.log(data)
            })
    }

    changeCurrentPage(el: number) {
        debugger
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${el}`)
            .then( data => {
                this.props.setUsers(data.data.items)
                console.log(data.data.items)
            })
    }

    render() {
        let pageNumber = []
        let page = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        for (let i = 1; i <= page ; i++) {
            pageNumber.push(i)
        }
        return (

            <div className={classes.body}>
                <h1>Users</h1>
                {pageNumber.map((el, index) =>
                    this.props.currentPage === el
                        ? <span key={index} className={classes.currentPage}> {el}</span >
                        :  <span key={index} onClick={() => this.changeCurrentPage(el)}> {el}</span>)}

                <div>{this.props.users.map((u,index) =>
                    <div key={index}>
                        <div className={classes.avatarBlock}>
                            <div className={classes.userAvatar}>
                                <img src={u.photos.small
                                    ? u.photos.small
                                    : 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg'}
                                     alt={'avatar'} className={classes.avatar}/>
                                <button onClick={() => {
                                    u.followed ? this.props.follow(u.id) : this.props.unfollow(u.id)
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
}


// export function Users(props: UsersType) {
//
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data => {
//
//                 props.setUsers(data.data.items)
//             }
//         )
//     }

//
//     return (
//         <div className={classes.body}>
//             <div>Users</div>
//             <div>{props.users.map(u =>
//                 <div>
//                     <div className={classes.avatarBlock}>
//                         <div className={classes.userAvatar}>
//                             <img src={u.photos.small
//                                 ? u.photos.small
//                                 : 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg'}
//                                  alt={'avatar'} className={classes.avatar}/>
//                             <button onClick={() => {
//                                 u.followed ? props.follow(u.id) : props.unfollow(u.id)
//                             }}>
//                                 {u.followed ? 'follow' : 'unfollow'}
//                             </button>
//                         </div>
//                         <div className={classes.userInfo}>
//                             <div className={classes.userName}>
//                                 <div>{u.name}</div>
//                                 <div>{u.status}</div>
//                             </div>
//                             <div className={classes.userLocation}>
//
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             )}</div>
//         </div>
//     )
// }
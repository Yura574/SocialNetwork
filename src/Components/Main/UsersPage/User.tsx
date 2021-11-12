import axios from "axios";
import React from "react";
import {UserType} from "../../../Redux/users_reducer";
import classes from './UserPage.module.css'


type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component <UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }
    onChangePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= pageCount; i++){
            page.push(i)
        }

        return (
            <div>
                <div>
                    { page.map( p => {
                       return <span onClick={()=> {this.onChangePage(p) } } className={this.props.currentPage === p ? classes.currentUsersPage : classes.usersPage}>{p}</span>
                    })}
                </div>
                    {this.props.users.map(u => <div key={u.id} className={classes.users}>
                            <div className={classes.follow}>
                                <img
                                    src={u.photos.small != null ? u.photos.small : 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
                                    alt={'avatar'} className={classes.img}/>
                                {u.followed
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
        )
    }
}
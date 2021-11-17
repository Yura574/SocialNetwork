import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Redux-store";
import {DataAuthMeType, setUserAuthData} from "../../Redux/auth_reducer";
import axios from "axios";

type HeaderAPIDataType = {
    data: DataAuthMeType | null
    isAuth: boolean
    setUserAuthData: (data: DataAuthMeType) => void
}

export class HeaderAPIData extends React.Component<HeaderAPIDataType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
              if(response.data.resultCode === 0){
                  this.props.setUserAuthData(response.data.data)
              }
            }
        )
    }

    render() {
        return <Header data={this.props.data}
                       isAuth={this.props.isAuth}/>
    }

}

const mapStateToProps = (state: StateType) => ({
    data: state.auth.data,
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {
    setUserAuthData

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIData)
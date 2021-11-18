import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Redux-store";
import {DataAuthMeType, setUserAuthData} from "../../Redux/auth_reducer";
import {authAPI} from "../../API/api";

type HeaderAPIDataType = {
    data: DataAuthMeType | null
    isAuth: boolean
    setUserAuthData: (data: DataAuthMeType) => void
}

export class HeaderAPIData extends React.Component<HeaderAPIDataType> {
    componentDidMount() {
        authAPI.authMe(this.props.setUserAuthData)
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
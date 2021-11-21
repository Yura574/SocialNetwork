import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Redux-store";
import {authMeThunkCreator, DataAuthMeType, setUserAuthData} from "../../Redux/auth_reducer";
import {authAPI} from "../../API/api";

type HeaderAPIDataType = {
    data: DataAuthMeType | null
    isAuth: boolean
    // setUserAuthData: (data: DataAuthMeType) => void
    authMeThunkCreator: () => void
}

export class HeaderAPIData extends React.Component<HeaderAPIDataType> {
    componentDidMount() {
        this.props.authMeThunkCreator()
        // authAPI.authMe(this.props.setUserAuthData)
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
    // setUserAuthData
    authMeThunkCreator

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIData)
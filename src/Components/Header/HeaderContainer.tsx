import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Redux-store";
import {logoutThunkCreator} from "../../Redux/auth_reducer";

type HeaderAPIDataType = {
    isAuth: boolean
    login: string | null
    logoutThunkCreator: () => void

}

 class HeaderAPIData extends React.Component<HeaderAPIDataType> {


    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logoutThunkCreator={this.props.logoutThunkCreator}/>
    }

}

const mapStateToProps = (state: StateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {
    logoutThunkCreator
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIData)
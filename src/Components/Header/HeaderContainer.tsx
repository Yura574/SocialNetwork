import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/Redux-store";
import {authMeThunkCreator, DataAuthMeType, setUserAuthData} from "../../Redux/auth_reducer";

type HeaderAPIDataType = {
    data: DataAuthMeType | null
    isAuth: boolean
    authMeThunkCreator: () => void
}

export class HeaderAPIData extends React.Component<HeaderAPIDataType> {
    componentDidMount() {
        this.props.authMeThunkCreator()
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
    authMeThunkCreator

}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIData)
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {AuthDataType, setAuthDataUser, setResultCode} from "../../Redux/authReducer";
import {authAPI} from "../../api/api";

type HeaderAPIComponentType = MapStateToProps & MapDispatchToProps

export class HeaderAPIComponent extends React.Component<HeaderAPIComponentType> {
    componentDidMount() {

        authAPI.authMe()
            .then(res => {
                this.props.setAuthDataUser(res.data.data)
                this.props.setResultCode(res.data.resultCode)

            })
    }

    render() {

        return (
            <Header isAuth={this.props.isAuth}
                    id={this.props.data.id}
                    login={this.props.data.login}
                    email={this.props.data.email}/>


        )
    }
}


type MapStateToProps = {
    isAuth: boolean
    data: AuthDataType
}
type MapDispatchToProps = {
    setAuthDataUser: (data: AuthDataType) => void
    setResultCode: (resultCode: 0 | 1) => void
}
const mapStateToProps = (state: StoreType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    data: state.auth.data
})

const mapDispatchToProps: MapDispatchToProps = {
    setAuthDataUser,
    setResultCode
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)


import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {AuthDataType, authMe, logoutTC} from "../../Redux/authReducer";

type HeaderAPIComponentType = MapStateToProps & MapDispatchToProps

export class HeaderAPIComponent extends React.Component<HeaderAPIComponentType> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {

        return (
            <Header isAuth={this.props.isAuth}
                    id={this.props.data.id}
                    login={this.props.data.login}
                    email={this.props.data.email}
                    logout={this.props.logoutTC}
            />
        )
    }
}


type MapStateToProps = {
    isAuth: boolean
    data: AuthDataType
}
type MapDispatchToProps = {
    authMe: () => void
    logoutTC: () => void
}
const mapStateToProps = (state: StoreType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    data: state.auth.data
})

const mapDispatchToProps: MapDispatchToProps = {
    authMe,
    logoutTC
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)


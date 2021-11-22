import React, {ComponentType} from "react";
import {Redirect} from "react-router";
import {StateType} from "../Redux/Redux-store";
import {connect} from "react-redux";

type MapStateToProps = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateToProps => ({
    isAuth: state.auth.isAuth
})

export function  withAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props:MapStateToProps) => {
        let{isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}


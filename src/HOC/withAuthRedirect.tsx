import {connect} from "react-redux";
import {StoreType} from "../Redux/redux-store";
import {ComponentType} from "react";
import {Redirect} from "react-router";





type MapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: StoreType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<P> (Component: ComponentType<P>)  {

    const RedirectComponent = (props: MapStateToProps) =>{
        const{ isAuth, ...restProps} = props
        if(!props.isAuth) return <Redirect to={'login'}/>
        return <Component {...restProps as P}/>
    }

    return connect(mapStateToProps)(RedirectComponent)


}
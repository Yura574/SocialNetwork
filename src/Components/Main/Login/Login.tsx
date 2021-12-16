import React from "react";
import classes from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../../../common/FormControls/FormControls";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../../Redux/auth_reducer";
import {Redirect} from "react-router";
import {StateType} from "../../../Redux/Redux-store";
import {fieldsValidator} from "../../../utils/validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    loginThunkCreator: (login: string, email: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Input = Element('input')

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><Field component={Input} validate={[fieldsValidator]} name={'login'} placeholder={'email'}/></div>
            <div><Field component={Input} validate={[fieldsValidator]} name={'password'} placeholder={'password'}/>
            </div>
            <div><Field component={Input} name={'rememberMe'} type={"checkbox"}/></div>
            {error && <div className={classes.errorEmail}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export function Login(props: LoginType) {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {loginThunkCreator})(Login)
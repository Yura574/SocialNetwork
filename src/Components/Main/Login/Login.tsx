import React from "react";
import classes from "./Login.module.css";
import Field, {reduxForm} from "redux-form";

function LoginForm() {
    return (
        <form>
            <div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
            <div><Field component={'input'} name={'password'} placeholder={'password'}/></div>
            <div><Field component={'input'} name={'rememberMe'} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export function Login() {
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}
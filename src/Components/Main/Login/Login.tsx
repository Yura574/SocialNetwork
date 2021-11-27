import React from "react";
import classes from "./Login.module.css";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
            <div><Field component={'input'} name={'password'} placeholder={'password'}/></div>
            <div><Field component={'input'} name={'rememberMe'} type={"checkbox"}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export function Login() {
   const onSubmit= (formData: FormDataType) => {
console.log(formData)
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
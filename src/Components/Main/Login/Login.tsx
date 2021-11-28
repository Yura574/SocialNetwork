import React from "react";
import classes from "./Login.module.css";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Element} from "../../../common/FormControls/FormControls";
import {fieldsValidator} from "../../../validators/validators";

export type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}
const Input = Element('input')

const LoginForm: React.FC<InjectedFormProps<FormDataType>> =(props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} validate={[fieldsValidator]} name={'login'} placeholder={'login'}/></div>
            <div><Field component={Input} validate={[fieldsValidator]} name={'password'} placeholder={'password'}/></div>
            <div><Field component={Input} validate={[fieldsValidator]} name={'rememberMe'} type={"checkbox"}/></div>
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
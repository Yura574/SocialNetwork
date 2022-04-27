import {Formik} from "formik";
import SuperInputText from "../../../CommonComponents/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../../CommonComponents/c3-SuperCheckbox/SuperCheckbox";
import s from './Login.module.css'
import SuperButton from "../../../CommonComponents/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../Redux/authReducer";
import {StoreType} from "../../../Redux/redux-store";
import {Redirect} from "react-router";

type FormikType = {
    email: string
    password: string
    rememberMe: boolean
}


export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<StoreType, boolean>(state => state.auth.isAuth)
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    const initialValue = {
        email: '',
        password: '',
        rememberMe: false
    }
    const validateError = (values: FormikType) => {
        const errors: Partial<FormikType> = {};
        if (!values.email) {
            errors.email = 'Email required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Password required';
        } else if (
            values.password.length < 8
        ) {
            errors.password = 'Password should be more 8 symbols';
        }
        return errors;
    }
    const onSubmitHandler = (values: FormikType,) => {

        dispatch(loginTC(values.email, values.password, values.rememberMe))


    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValue}
                validate={validateError}
                onSubmit={onSubmitHandler}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting, /* and other goodies */
                  }) =>
                    <form onSubmit={handleSubmit} className={s.wrapper}>
                        <div>
                            <div><span>Email</span>
                                <SuperInputText
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder={'email'}
                                />
                                <div>{errors.email && touched.email && errors.email}</div>
                            </div>
                            <div><span>Password</span>
                                <SuperInputText
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder={'password'}
                                />

                                <div>{errors.password && touched.password && errors.password}</div>
                            </div>
                            <div><span>Remember me</span>
                                <SuperCheckbox
                                    type="checkbox"
                                    name="rememberMe"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.rememberMe}/></div>
                            <SuperButton type="submit" disabled={isSubmitting}>
                                Submit
                            </SuperButton>
                        </div>
                    </form>
                }
            </Formik>
        </div>
    )
}
import React from 'react';
import Classes from './Login.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {login} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormAuth/>
        </div>
    );
}

const LoginForm = ({isAuth, error, login, captcha}) => {

    return isAuth ?
        <Redirect to={'/profile'}/> :
        <Formik
            initialValues={{email: '', password: '', remember: false}}

            validationSchema={Yup.object({
                email: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string().required('Required'),
            })}

            onSubmit={async (values) => {
                await login(values);
            }}
        >
            {({isSubmitting}) => (
                <Form className={Classes.form}>
                    {error && <div className={Classes.error}>{error}</div>}
                    {captcha &&
                    <>
                        <img src={captcha}/>
                        <label htmlFor="captcha">Captcha</label>
                        <Field name='captcha' type="text"/>
                        <ErrorMessage name="captcha" component="div" className={Classes.error}/>
                    </>}

                    <label htmlFor="email">Login</label>
                    <Field name='email' type="text"/>
                    <ErrorMessage name="email" component="div" className={Classes.error}/>

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password"/>
                    <ErrorMessage name="password" component="div" className={Classes.error}/>

                    <Field name="remember" type="checkbox"/>
                    <button type="submit" disabled={isSubmitting}>Login</button>
                </Form>
            )}
        </Formik>
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error,
        captcha: state.auth.captcha,
    }
}

const LoginFormAuth = connect(mapStateToProps,
    {
        login
    }
)(LoginForm);

export default Login;



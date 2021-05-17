import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

function mapStateToPropsAuth(state) {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const WithAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        if (!props.isAuth) return <Redirect to='/login'/>
        return (
            <Component {...props}/>
        );
    }

    return connect(mapStateToPropsAuth, {})(RedirectComponent);
}



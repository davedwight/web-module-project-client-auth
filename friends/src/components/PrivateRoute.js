import React from 'react';
import { Route, Redirect  } from 'react-router-dom';

const PrivateRoute = (props, {component:Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        if (props.isAuth) {
            return(<Component {...props} />)
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

export default PrivateRoute;
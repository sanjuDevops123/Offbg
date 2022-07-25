import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import TokenService from '../Services/token.service';
import UserService from '../Services/user.service';
import { addActions } from '../Store/features/user.slice';

const PrivateRoute = ({ component: Component, actionName, actions, ...rest }) => {
    // const dispatch = useDispatch();
    // console.log(actions, actionName);
    // if(!actions.length) {
    //     // try {
    //     //     const res = await UserService.getUserinfo();
    //     //     if(res?.data) {
    //     //         dispatch(addActions({actions: res?.data?.actions || []}))
    //     //     }
    //     //     actions = res?.data?.actions;
    //     // } catch (error) {
    //     //     console.log(error)
    //     // }
    // }
    const currentUser = TokenService.getLocalAccessToken();
    if (!currentUser) {
        return <Navigate to={{ pathname: '/auth/login', state: { from: rest.location } }} />
    }
    if (!actions.includes(actionName)) {
        TokenService.removeUser();
        return <Navigate to={{ pathname: '/auth/login' }} />
    }
    return (<Component {...rest} />)

}

export default PrivateRoute;
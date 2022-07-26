import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import JoinMembershipPage from '../pages/JoinMembershipPage';
import LoginPage from '../pages/LoginPage';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import SplashPage from '../pages/SplashPage';
function Auth() {
    return (
        <Switch>
            <Route exact path='/' component={() => <SplashPage />} />
            <Route path='/join' component={() => <JoinMembershipPage />} />
            <Route path='/login' component={() => <LoginPage />} />
            <Route
                path='/profilesetting'
                component={() => <ProfileSettingPage />}
            />
        </Switch>
    );
}

export default Auth;

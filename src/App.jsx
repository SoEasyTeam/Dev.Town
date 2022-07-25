import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import MyProfilePage from './pages/MyProfile';
import AddProductPage from './pages/AddProductPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import ProfileModificationPage from './pages/ProfileModificationPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import FollowerPage from './pages/FollowerPage';
import FollowingPage from './pages/FollowingPage';


function App() {
    let localToken = localStorage.getItem('key');

    return (
        <Switch>
            <Route exact path='/' component={() => <SplashPage />} />
            <Route path='/join' component={() => <JoinMembershipPage />} />
            <Route
                path='/login'
                component={() => (
                    <LoginPage
                    />
                )}
            />
            <Route path='/profilesetting' component={() => <ProfileSettingPage />} />
            <Route path='/home' component={() => <HomePage localToken={localToken}/>} />
            <Route path='/search' component={() => <SearchPage localToken={localToken}/>} />

            <Route
                path='/myprofile'
                component={() => <MyProfilePage />}
            />
            <Route path='/follower' component={() => <FollowerPage localToken={localToken}/>} />
            <Route path='/following' component={() => <FollowingPage localToken={localToken}/>} />
            <Route path='/product' component={() => <AddProductPage localToken={localToken}/>} />
            <Route path='/profilemodification' component={() => <ProfileModificationPage localToken={localToken}/>} />
            <Route path='/post/:id' component={() => <PostPage localToken={localToken}/>} />
        </Switch>
    );
}

export default App;
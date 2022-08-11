import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import AddProductPage from '../pages/AddProductPage'
import ChatItemPage from '../pages/ChatItemPage'
import ChatPage from '../pages/ChatPage'
import Error404Page from '../pages/Error404Page'
import FollowerPage from '../pages/FollowerPage'
import FollowingPage from '../pages/FollowingPage'
import HomePage from '../pages/HomePage'
import JoinMembershipPage from '../pages/JoinMembershipPage'
import LoginPage from '../pages/LoginPage'
import MyProfilePage from '../pages/MyProfile'
import PostPage from '../pages/PostPage'
import ProductModificationPage from '../pages/ProductModificationPage'
import ProfileModificationPage from '../pages/ProfileModificationPage'
import ProfileSettingPage from '../pages/ProfileSettingPage'
import SearchPage from '../pages/SearchPage'
import SplashPage from '../pages/SplashPage'
import YourProfilePage from '../pages/YourProfile'
import PostUploadPage from '../pages/PostUploadPage'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Nav = () => {
    let tokenValid = useSelector(state=>state.token.tokenValid);
    const history = useHistory();
    console.log(tokenValid)
    useEffect(() => {
        console.log(tokenValid);
        if(tokenValid.isValid === true) {
            history.push('/home');
        }
    }, [tokenValid, history])
    return (
        <>
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
            <Route path='/chatlist' component={() => <ChatPage />} />
            <Route path='/chatroom' component={() => <ChatItemPage />} />
            <Route path='/home' component={() => <HomePage/>} />
            <Route
                path='/myprofile'
                component={() => <MyProfilePage />}
            />
            <Route
                path='/yourpage'
                component={() => <YourProfilePage />}
            />
            <Route exact path='/post' component={() => <PostUploadPage />} />
            <Route path='/search' component={() => <SearchPage />} />
            <Route path='/follower' component={() => <FollowerPage />} />
            <Route path='/following' component={() => <FollowingPage />} />
            <Route exact path='/product' component={() => <AddProductPage />} />
            <Route path='/profilemodification' component={() => <ProfileModificationPage />} />
            <Route path='/post/:id' component={() => <PostPage />} />
            <Route path='/product/:product_id' component={() => <ProductModificationPage />} />
            <Route path='*' component={Error404Page} />
        </>
    )
}

export default Nav
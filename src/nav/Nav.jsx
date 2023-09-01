import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddProductPage from '../pages/AddProductPage';
import ChatItemPage from '../pages/ChatItemPage';
import ChatPage from '../pages/ChatPage';
import Error404Page from '@pages/Error404Page';
import FollowerPage from '@pages/FollowerPage';
import FollowingPage from '@pages/FollowingPage';
import HomePage from '@pages/HomePage';
import JoinMembershipPage from '@pages/JoinMembershipPage';
import LoginPage from '@pages/LoginPage';
import MyProfilePage from '@pages/MyProfile';
import PostPage from '@pages/PostPage';
import ProductModificationPage from '@pages/ProductModificationPage';
import ProfileModificationPage from '@pages/ProfileModificationPage';
import ProfileSettingPage from '@pages/ProfileSettingPage';
import SearchPage from '@pages/SearchPage';
import SplashPage from '@pages/SplashPage';
import YourProfilePage from '@pages/YourProfile';
import PostUploadPage from '@pages/PostUploadPage';
import { useSelector } from 'react-redux';

const Nav = () => {
    let { tokenValid } = useSelector((state) => state.token);
    let { token } = useSelector((state) => state.auth);
    // const navigate = useNavigate();
    useEffect(() => {
        if (token) console.log('토큰 변경');
    }, [token]);

    return (
        <Routes>
            <Route exact path='/' element={<SplashPage />} />
            <Route path='/join' element={<JoinMembershipPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profilesetting' element={<ProfileSettingPage />} />
            <Route path='/chatlist' element={<ChatPage />} />
            <Route path='/chatroom' element={<ChatItemPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/myprofile' element={<MyProfilePage />} />
            <Route path='/yourpage' element={<YourProfilePage />} />
            <Route exact path='/post' element={<PostUploadPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/follower' element={<FollowerPage />} />
            <Route path='/following' element={<FollowingPage />} />
            <Route exact path='/product' element={<AddProductPage />} />
            <Route
                path='/profilemodification'
                element={<ProfileModificationPage />}
            />
            <Route path='/post/:id' element={<PostPage />} />
            <Route
                path='/product/:product_id'
                element={<ProductModificationPage />}
            />
            <Route path='*' element={<Error404Page />} />
        </Routes>
    );
};

export default Nav;

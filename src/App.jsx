import { Link, Route, Switch, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import MyProfilePage from './pages/MyProfile';
import YourProfilePage from './pages/YourProfile';
import AddProductPage from './pages/AddProductPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import FollowerPage from './pages/FollowerPage';
import FollowingPage from './pages/FollowingPage';
import PostUploadPage from './pages/PostUploadPage'
import ProductModificationPage from './pages/ProductModificationPage';
import ProfileModificationPage from './pages/ProfileModificationPage';
import ChatPage from './pages/ChatPage';
import ChatItemPage from './pages/ChatItemPage';
import Error404Page from './pages/Error404Page'
// import Auth from './nav/Auth';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

function App() {
    // let tokenValid = useSelector(state=>state.token.tokenValid)
    // useEffect(() => {
    //     console.log(tokenValid);
    // }, [tokenValid])
    return (
        <Switch>
            {/* <Auth /> */}
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
        </Switch>
    );
}

export default App;
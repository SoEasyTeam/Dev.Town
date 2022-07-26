import { Route, Router, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import MyProfilePage from './pages/MyProfile';
import AddProductPage from './pages/AddProductPage';
import ProfileSettingPage from './pages/ProfileSettingPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import FollowerPage from './pages/FollowerPage';
import FollowingPage from './pages/FollowingPage';
import ProductModificationPage from './pages/ProductModificationPage';
import Navigation from './nav'

function App() {
    return (
        // <Navigation/>
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
            <Router>
                <Route path='/home' component={() => <HomePage />} />
                <Route path='/search' component={() => <SearchPage />} />
                <Route
                    path='/myprofile'
                    component={() => <MyProfilePage />}
                />
            </Router>
            <Route path='/follower' component={() => <FollowerPage />} />
            <Route path='/following' component={() => <FollowingPage />} />
            <Route exact path='/product' component={() => <AddProductPage />} />
            <Route path='/post/:id' component={() => <PostPage />} />
            <Route path='/product/:product_id' component={() => <ProductModificationPage />} />
        </Switch>
    );
}

export default App;
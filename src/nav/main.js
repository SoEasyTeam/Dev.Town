import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProductPage from '../pages/AddProductPage';
import FollowerPage from '../pages/FollowerPage';
import FollowingPage from '../pages/FollowingPage';
import HomePage from '../pages/HomePage';
import MyProfilePage from '../pages/MyProfile';
import PostPage from '../pages/PostPage';
import ProductModificationPage from '../pages/ProductModificationPage';
import SearchPage from '../pages/SearchPage';

function Main() {
    return (
        <Switch>
            <Route exact path='/home' component={() => <HomePage />} />
            <Route path='/search' component={() => <SearchPage />} />
            <Route path='/myprofile' component={() => <MyProfilePage />} />
            <Route path='/follower' component={() => <FollowerPage />} />
            <Route path='/following' component={() => <FollowingPage />} />
            <Route exact path='/product' component={() => <AddProductPage />} />
            <Route path='/post/:id' component={() => <PostPage />} />
            <Route
                path='/product/:product_id'
                component={() => <ProductModificationPage />}
            />
        </Switch>
    );
}

export default Main;

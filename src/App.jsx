import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JoinMembershipPage from './pages/JoinMembershipPage';
import LoginPage from './pages/LoginPage';
import SplashPage from './pages/SplashPage';
import MyProfilePage from './pages/MyProfile';
import SearchPage from './pages/SearchPage';
import { useSelector } from 'react-redux';

function App() {
    let [authenticate, setAuthenticate] = useState(false);
    const state = useSelector((state) => state);
    console.log(state, 'app');
    useEffect(() => {
        console.log(authenticate);
    }, [authenticate]);
    return (
        <Switch>
            <Route exact path='/' component={() => <SplashPage />} />
            <Route path='/join' component={() => <JoinMembershipPage />} />
            <Route
                path='/login'
                component={() => (
                    <LoginPage
                        setAuthenticate={setAuthenticate}
                        authenticate={authenticate}
                    />
                )}
            />
            <Route path='/home' component={() => <HomePage />} />
            <Route path='/myprofile/' component={() => <MyProfilePage />} />
            <Route path='/search' component={() => <SearchPage />} />
        </Switch>
    );
}

export default App;

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Auth from './auth';
import Main from './main';

const Navigation = () => {
    const token = useSelector((state) => state.auth.token);
    useEffect(() => {}, [token]);
    return <Switch>{token === '' ? <Auth /> : <Main />}</Switch>;
};

export default Navigation;

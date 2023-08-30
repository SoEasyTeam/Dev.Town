import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
import ScrollToTop from '@components/scroll';

const GlobalStyle = createGlobalStyle`
    ${reset}
    li {
        list-style: none;
    }
    a {
        text-decoration : none;
        color : inherit;
    }

    button {
        border : none;
        cursor : pointer;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 12px;
    }

    img {
        width: 100%;
        height: auto;
    }

    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }

    input {
        &:focus {
            outline: none;
            border: none;
        }
    }

    textarea {
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none; 
    }

    .ir {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }

    :root {
        --main-color: #B6E546;
        --main-disabled-color: #D8F494;
        --main-title-color: #000000;
        --subtitle-text: #767676;
        --disabled-text-color: #FFFFFF;
        --border-gray: #DBDBDB;
        --warning-color: #EB5757;
        --bg-color: #FFFFFF;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

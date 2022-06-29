import React from 'react';
import { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn } from './components/common/ProfileButtons';
import Splash from './components/splash/Splash';

function App() {
    return (
        <>
            <Splash></Splash>
            <div style={{width: '50px'}}>
                <DefaultProfileImg />
                <ImgUploadBtn />
                <ImgGrayBtn />
            </div>
            
        </>
    );
}

export default App;
import logoImg from '@public/assets/images/full-logo.png';
import { SplashRowBox } from '@components/login/Splash/index.style';

function Splash({ isActive }) {
    return (
        <SplashRowBox isActive={isActive}>
            <img className='img-logo' src={logoImg} alt='' />
            <h1 className='tit-app'>데브타운</h1>
        </SplashRowBox>
    );
}

export default Splash;

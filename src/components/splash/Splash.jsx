import styled, { keyframes } from 'styled-components';
import logoImg from '../../assets/full-logo.png';

const ScreenFadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        display: none;
    }
`;

const SplashLayout = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 200px;
`;

export default function Splash() {
    return (
        <SplashLayout>
            <LogoImg src={logoImg} alt="데브타운" />
        </SplashLayout>
    );
}

import styled from 'styled-components';
import logoImg from '../../assets/full-logo.png';

const SplashRowBox = styled.div`
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img-logo {
        width: 200px;
    }

    .tit-app {
        margin-top: 0.5rem;
        color: var(--main-color);
        font-size: 2.7rem;
        font-weight: 800;
    }

`;

export default function Splash() {
    return (
        <SplashRowBox>
            <img className='img-logo' src={logoImg} alt="" />
            <h1 className='tit-app'>데브타운</h1>
        </SplashRowBox>
        
    );
}

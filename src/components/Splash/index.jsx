import logoImg from '../../assets/full-logo.png';
import { SplashRowBox } from './index.style';

export default function Splash({ isActive }) {
  return (
      <SplashRowBox isActive={isActive}>
          <img className='img-logo' src={logoImg} alt='' />
          <h1 className='tit-app'>데브타운</h1>
      </SplashRowBox>
  );
}
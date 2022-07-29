import { useEffect, useState } from 'react';
import LoginOptions from '../components/login/LoginOptions';
import Splash from '../components/login/Splash';

export default function SplashPage() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 1500);
    }, []);
    return (
        <>
            {isActive ? (
                <LoginOptions isActive={isActive} />
            ) : (
                <Splash isActive={isActive} />
            )}
        </>
    );
}

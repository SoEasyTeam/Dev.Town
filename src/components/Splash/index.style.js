import styled from 'styled-components';

export const SplashRowBox = styled.div`
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    ${({ isActive }) => {
        return isActive === true ? null : `z-index: 2`;
    }};
    ${({ isActive }) => {
        return isActive === true ? `opacity: 0` : `opacity: 1`;
    }};

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

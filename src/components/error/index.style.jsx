import styled from 'styled-components';
import ErrorImg from '@public/assets/images/error404-icon.png';

const ErrorPageBox = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorIcon = styled.img.attrs({
    src: `${ErrorImg}`,
    alt: '404 에러',
})`
    width: 148px;
`;

const ErrorMessage = styled.p`
    margin: 25px 0;
    font-size: 14px;
    color: var(--subtitle-text);
`;

export { ErrorIcon, ErrorPageBox, ErrorMessage };

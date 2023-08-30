import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalOutside = styled.div`
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ModalContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 28px;
    z-index: 20;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-radius: 10px 10px 0 0;
    padding: 16px 16px 28px 16px;
    .deleteModalBtn {
        justify-content: center;
        content: ' ';
        margin: 0 auto;
        width: 50px;
        height: 4px;
        background: #dbdbdb;
        border-radius: 5px;
    }
    a {
        display: flex;
        padding-left: 26px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        &:hover {
            font-weight: bold;
        }
    }
`;

export const ButtonLink = styled(Link)`
    display: flex;
    padding-left: 26px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    &:hover {
        font-weight: bold;
    }
`;

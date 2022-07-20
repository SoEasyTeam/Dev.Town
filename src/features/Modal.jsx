import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Dimmer from './Dimmer';

const ModalContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 28px;
    z-index: 20;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #FFF;
    border-radius: 10px 10px 0 0;
    padding: 16px;

    button {
        display: flex;
        padding-left: 26px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
    .deleteModalBtn {
        justify-content: center;
    }
`


function MyProductModal({ onCloseModal }) {
    // const history = useHistory();
    return (
        <>
            {/* <Dimmer onClick={() => history.replace('/myprofile')} /> */}
            <ModalContainer>
                <button className='deleteModalBtn' onClick={onCloseModal}>✖</button>
                <button>삭제</button>
                <button>수정</button>
                <button>웹사이트에서 상품보기</button>
            </ModalContainer>
        </>
    );
}

function MyPostModal({ onCloseModal }) {
    return (
        <>
            <ModalContainer>
                <button className='deleteModalBtn' onClick={onCloseModal}>✖</button>
                <button>삭제</button>
                <button>수정</button>
            </ModalContainer>
        </>
    );
}

function YourPostModal({ onCloseModal }) {
    return (
        <>
            <ModalContainer>
                <button onClick={onCloseModal}>✖</button>
                <button>신고</button>
            </ModalContainer>
        </>
    );
}

export { MyProductModal, MyPostModal, YourPostModal };
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ModalOutside = styled.div`
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
`
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
    padding: 16px 16px 28px 16px;
    .deleteModalBtn {
        justify-content: center;
        content: " ";
        margin: 0 auto;
        width: 50px;
        height: 4px;
        background: #dbdbdb;
        border-radius: 5px;
    }
`

const ButtonLink = styled(Link)`
        display: flex;
        padding-left: 26px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        &:hover{
            font-weight: bold;
        }
`


function MyProductModal({ closeModal, itemLink }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink to={'/home'}>삭제</ButtonLink>
                <ButtonLink to={'/product'}>수정</ButtonLink>
                <ButtonLink to={itemLink} target='_blank'>웹사이트에서 상품보기</ButtonLink>
            </ModalContainer>
        </>
    );
}

function MyPostModal({ closeModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink>삭제</ButtonLink>
                <ButtonLink>수정</ButtonLink>
            </ModalContainer>
        </>
    );
}

function YourPostModal({ closeModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink>신고</ButtonLink>
            </ModalContainer>
        </>
    );
}

export { MyProductModal, MyPostModal, YourPostModal };
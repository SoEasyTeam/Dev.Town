import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AlertProductModal } from './AlertModal';

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
    a {
        display: flex;
        padding-left: 26px;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        &:hover{
            font-weight: bold;
        }
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

// 상품 클릭시 모달
function MyProductModal({ closeModal, alertOnModal, itemLink }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>삭제</ButtonLink>
                <ButtonLink to={'/product'}>수정</ButtonLink>
                <a href={itemLink} target='_blank' rel="noreferrer">웹사이트에서 상품보기</a>
            </ModalContainer>
        </>
    );
}

// 내 게시물 클릭시 모달
function MyPostModal({ closeModal, alertOnModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>삭제</ButtonLink>
                <ButtonLink to={'/post'}>수정</ButtonLink>
            </ModalContainer>
        </>
    );
}

// 상대 게시글, 댓글 더보기 클릭시 모달
function YourPostModal({ closeModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink>신고하기</ButtonLink>
            </ModalContainer>
        </>
    );
}

// 내 댓글 더보기 클릭시 모달
function MyCommentModal({ closeModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink>삭제</ButtonLink>
            </ModalContainer>
        </>
    );
}

// 프로필 더보기 클릭시 모달
function ProfileModal({ closeModal }) {
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={closeModal}>설정 및 개인정보</ButtonLink>
                <ButtonLink>로그아웃</ButtonLink>
            </ModalContainer>
        </>
    );
}

export { MyProductModal, MyPostModal, YourPostModal, MyCommentModal, ProfileModal };
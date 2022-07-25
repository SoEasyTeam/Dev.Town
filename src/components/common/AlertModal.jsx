import React from 'react'
import styled from 'styled-components';

const AlertOutside = styled.div`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`
const AlertContainer = styled.section`
    position: fixed;
    z-index: 200;
    width: 252px;
    height: 110px;
    top: 50%;
    background-color: #fff;
    border-radius: 10px;
    .alertMsg{
        display: block;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        padding: 22px 0;
        text-align: center;
    }
`

const AlertUl = styled.ul`
    display: flex;
    border-top: 0.5px solid #DBDBDB;
    li{
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        width: 50%;
        text-align: center;
        padding: 14px 0;
        cursor: pointer;
    }
    .selectColor{
        color: var(--main-color);
        border-left: 0.5px solid #DBDBDB;
    }
`

// 상품 삭제
function AlertProductModal({ alertOffModal }) {
    console.log('alertmodal 나옴')
    return (
        <>
            <AlertOutside />
            <AlertContainer>
                <strong className='alertMsg'>상품을 삭제할까요?</strong>
                <AlertUl>
                    <li onClick={alertOffModal}>취소</li>
                    <li className='selectColor'>삭제</li>
                </AlertUl>
            </AlertContainer>
        </>
    );
}

// 게시글 삭제
function AlertPostModal({ alertOffModal }) {
    return (
        <>
            <AlertOutside />
            <AlertContainer>
                <strong className='alertMsg'>게시글을 삭제할까요?</strong>
                <AlertUl>
                    <li onClick={alertOffModal}>취소</li>
                    <li className='selectColor'>삭제</li>
                </AlertUl>
            </AlertContainer>
        </>
    );
}

// 신고하기
function AlertDeclareModal({ alertOffModal }) {
    return (
        <>
            <AlertOutside />
            <AlertContainer>
                <strong className='alertMsg'>신고할까요?</strong>
                <AlertUl>
                    <li onClick={alertOffModal}>취소</li>
                    <li className='selectColor'>신고</li>
                </AlertUl>
            </AlertContainer>
        </>
    );
}

// 로그아웃
function AlertLogoutModal({ alertOffModal }) {
    return (
        <>
            <AlertOutside />
            <AlertContainer>
                <strong className='alertMsg'>로그아웃하시겠어요?</strong>
                <AlertUl>
                    <li onClick={alertOffModal}>취소</li>
                    <li className='selectColor'>로그아웃</li>
                </AlertUl>
            </AlertContainer>
        </>
    );
}

export { AlertProductModal, AlertPostModal, AlertDeclareModal, AlertLogoutModal };
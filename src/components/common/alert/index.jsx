import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticateAction } from '../../../redux/actions/authenticateAction';
import { productAction } from '../../../redux/actions/productAcition';
import { AlertBox, AlertOutside, AlertContainer, AlertUl, DeleteAlertBox, AlertP, ButtonBox, CancelBtn, DeleteBtn } from './index.style'

// 상품 삭제
function AlertProductModal({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    console.log('alertmodal 나옴')
    const dispatch = useDispatch();
    useSelector()
    // console.log(product_id)

    const onClickDeleteBtn = () => {
        console.log('삭제해라')
        alertOffModal();
    }

    // useEffect(() => {
    //     dispatch(productAction.productDelete(product_id));
    // }, [product_id])
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>상품을 삭제할까요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor' onClick={onClickDeleteBtn}>삭제</li>
                    </AlertUl>
                </AlertContainer>
            </AlertBox>
        </>
    );
}

// 게시글 삭제
function AlertPostModal({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>게시글을 삭제할까요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor'>삭제</li>
                    </AlertUl>
                </AlertContainer>
            </AlertBox>

        </>
    );
}

// 신고하기
function AlertDeclareModal({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>신고할까요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor' onClick={alertOffModal}>신고</li>
                    </AlertUl>
                </AlertContainer>
            </AlertBox>
        </>
    );
}

// 로그아웃
// 왜 로그아웃 alert만 화면 왼쪽으로 붙는지 모르겠습니다..
function AlertLogoutModal({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    const history = useHistory();
    const onClickLogoutHandler = () => {
        sessionStorage.clear();
        history.push('/');
    }
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>로그아웃하시겠어요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor' onClick={onClickLogoutHandler}>로그아웃</li>
                    </AlertUl>
                </AlertContainer>
            </AlertBox>
        </>
    );
}

// 삭제
function DeleteAlert({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    return (
        <DeleteAlertBox>
            <AlertP>삭제할까요?</AlertP>
            <ButtonBox>
                <CancelBtn onClick={alertOffModal}>취소</CancelBtn>
                <DeleteBtn onClick={alertOffModal}>삭제</DeleteBtn>
            </ButtonBox>
        </DeleteAlertBox>
    );
}

export { AlertProductModal, AlertPostModal, AlertDeclareModal, AlertLogoutModal, DeleteAlert };
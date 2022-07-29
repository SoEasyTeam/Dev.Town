import React from 'react'
import { AlertBox, AlertOutside, AlertContainer, AlertUl } from './index.style'

// 상품 삭제
function AlertProductModal({ alertOffModal }) {
    document.body.style.overflow = "hidden";
    console.log('alertmodal 나옴')
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>상품을 삭제할까요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor'>삭제</li>
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
                        <li className='selectColor'>신고</li>
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
    return (
        <>
            <AlertBox>
                <AlertOutside />
                <AlertContainer>
                    <strong className='alertMsg'>로그아웃하시겠어요?</strong>
                    <AlertUl>
                        <li onClick={alertOffModal}>취소</li>
                        <li className='selectColor'>로그아웃</li>
                    </AlertUl>
                </AlertContainer>
            </AlertBox>
        </>
    );
}

export { AlertProductModal, AlertPostModal, AlertDeclareModal, AlertLogoutModal };
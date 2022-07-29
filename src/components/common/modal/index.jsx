import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { productAction } from '../../../redux/actions/productAcition';
import { ModalOutside, ModalContainer, ButtonLink } from './index.style'

// 상품 클릭시 모달
function MyProductModal({ itemName, price, link, itemImage, product_id, closeModal, author }) {
    const dispatch = useDispatch();
    console.log(product_id)
    const onClickModifictionBtn = () => {
        dispatch(productAction.productModificationModal(itemName, price, link, itemImage, product_id, author));
    }

    const onClickDeleteBtn = () => {
        dispatch(productAction.productDelete(product_id));
        closeModal();
    }

    document.body.style.overflow = "hidden";
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={onClickDeleteBtn}>삭제</ButtonLink>
                <ButtonLink onClick={onClickModifictionBtn} to={`./product/${product_id}`}>수정</ButtonLink>
                <a href={link} target='_blank' rel="noreferrer">웹사이트에서 상품보기</a>
            </ModalContainer>
        </>
    );
}

// 내 게시물 클릭시 모달
function MyPostModal({ closeModal, alertOnModal, id }) {
    document.body.style.overflow = "hidden";
    const accountname = useSelector(state => state.auth.accountname);
    console.log('게시물 계정이름', id);
    console.log('로그인 유저 계정이름', accountname)
    return (
        <>
            {id === accountname ?
                <>
                    <ModalOutside onClick={closeModal} />
                    <ModalContainer>
                        <button className='deleteModalBtn' onClick={closeModal}></button>
                        <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>삭제</ButtonLink>
                        <ButtonLink to={'/post'}>수정</ButtonLink>
                    </ModalContainer>
                </> :
                <>
                    <ModalOutside onClick={closeModal} />
                    <ModalContainer>
                        <button className='deleteModalBtn' onClick={closeModal}></button>
                        <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>신고하기</ButtonLink>
                    </ModalContainer>
                </>
            }
        </>
    );
}

// 상대 게시글, 댓글 더보기 클릭시 모달
function YourPostModal({ closeModal, alertOnModal }) {
    document.body.style.overflow = "hidden";
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>신고하기</ButtonLink>
            </ModalContainer>
        </>
    );
}

// 내 댓글 더보기 클릭시 모달
function MyCommentModal({ closeModal }) {
    document.body.style.overflow = "hidden";
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
function ProfileModal({ closeModal, alertOnModal }) {
    document.body.style.overflow = "hidden";
    return (
        <>
            <ModalOutside onClick={closeModal} />
            <ModalContainer>
                <button className='deleteModalBtn' onClick={closeModal}></button>
                <ButtonLink onClick={closeModal}>설정 및 개인정보</ButtonLink>
                <ButtonLink onClick={() => { closeModal(); alertOnModal() }}>로그아웃</ButtonLink>
            </ModalContainer>
        </>
    );
}

export { MyProductModal, MyPostModal, YourPostModal, MyCommentModal, ProfileModal };
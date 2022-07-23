import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { MyProductModal } from '../common/Modal';


const ProductItemBox = styled.div`
    width: 140px;
    margin-right: 10px;
    cursor: pointer;
    .img-product {
        width: 100%;
        height: 90px;
        border-radius: 8px;
        border: 0.5px solid #DBDBDB;
        margin-bottom: 6px;
    }
    .txt-productName {
        margin: 0px 2px 4px;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .txt-productPrice {
        margin: 0px 2px;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        text-align: left;
        color: var(--main-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

const Product = ({ name, price, src, itemLink, writerId }) => {
    const userId = useSelector(state => state.auth.id);
    const [modalOn, setModalOn] = useState(false);

    function openModal() {
        console.log('상품등록유저', writerId);
        console.log('유저:', userId);
        if (userId !== writerId) {
            setModalOn(false);
            console.log('상품링크로 이동')
            window.open({ itemLink }, '_blank')
        } else {
            setModalOn(true);
        }
    }

    function closeModal() {
        setModalOn(false);
    }

    return (
        <>
            <ProductItemBox onClick={openModal}>
                <img
                    className='img-product'
                    src={src}
                    alt='상품이미지'
                />
                <p className='txt-productName'>{name}</p>
                <span className='txt-productPrice'>{price}원</span>
            </ProductItemBox>
            {modalOn === true ? <MyProductModal openModal={openModal} closeModal={closeModal} /> : ''}
        </>
    );
};

export default Product;

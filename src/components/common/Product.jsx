import React from 'react';
import styled from 'styled-components';

const ProductItemBox = styled.div`
    width: 140px;
    margin-right: 10px;
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

const Product = ({ name, price, src }) => {
    return (
        <>
            <ProductItemBox>
                <img
                    className='img-product'
                    src={src}
                    alt='상품이미지'
                />
                <p className='txt-productName'>{name}</p>
                <span className='txt-productPrice'>{price}원</span>
            </ProductItemBox>
        </>
    );
};

export default Product;

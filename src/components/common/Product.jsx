import React from 'react';
import styled from 'styled-components';
import ProductImgExample from '../../assets/product-img-example.png';

const ProductItemBox = styled.div`
    .img-product {
        width: 140px;
        height: 90px;
        border-radius: 8px;
        margin-bottom: 6px;
    }
    .txt-productName {
        margin: 0px 2px 4px;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        text-align: left;
    }
    .txt-productPrice {
        margin: 0px 2px;
        //styleName: 12p, 14h,pointcolor;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        text-align: left;
        color: var(--main-color);
    }
`;

const Product = () => {
    return (
        <>
            <ProductItemBox>
                <img
                    className='img-product'
                    src={ProductImgExample}
                    alt='상품이미지'
                />
                <p className='txt-productName'>애월읍 노지 감귤</p>
                <span className='txt-productPrice'>35,000</span>
            </ProductItemBox>
        </>
    );
};

export default Product;

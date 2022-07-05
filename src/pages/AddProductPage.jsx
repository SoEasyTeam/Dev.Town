import React from 'react'
import { TopUploadNav } from '../components/common/TopNav'
import styled from 'styled-components'
import ImgBtn from '../assets/img-button.png'
import { ProductName, TextLabel } from '../components/common/TextAciveInput'

const ProductBox = styled.div`
    width: 390px;
    padding: 0 34px;
    margin: 0 auto;
    .addProduct-span {
        display: block;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        text-align: left;
        margin-bottom: 18px;
        color: #767676;
    }
    .addProductImg-div{
        height: 204px;
        width: 322px;
        border-radius: 10px;
        border: 0.5px solid #DBDBDB;
        background-color: #F2F2F2;
        position: relative;
        margin-bottom: 30px;
        .addProductImg-btn{
            position: absolute;
            width: 36px;
            height: 36px;
            top: 156px;
            left: 274px;
            background-image: url(${ImgBtn});
        }
    }
`

function AddProductPage() {
    return (
        <>
            <TopUploadNav />
            <ProductBox>
                <span className='addProduct-span'>이미지 등록</span>
                <div className='addProductImg-div'>
                    <button className='addProductImg-btn'></button>
                </div>
                <TextLabel>상품명</TextLabel>
                <ProductName />
            </ProductBox>
        </>
    )
}

export default AddProductPage
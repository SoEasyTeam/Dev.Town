import React from 'react'
import { ArrowLeftLink, TopNavRowBox } from '../components/common/TopNav'
import styled from 'styled-components'
import ImgBtn from '../assets/img-button.png'
import { ProductLink, ProductName, ProductPrice, TextLabel } from '../components/common/TextAciveInput'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../redux/actions/addProductAction'
import { MsBtn } from '../components/common/Buttons'
import {WarningParagraph} from './LoginPage'

const ProductForm = styled.form`
`

const ProductBox = styled.div`
    width: 390px;
    padding: 0 34px;
    margin: 30px auto 0;
`

const AddProductSpan = styled.span`
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin-bottom: 18px;
    color: #767676;
`

const AddProductLabel = styled.label`
    position: relative;
    cursor: pointer;
    .addProduct-img {
        display: block;
        background-color: #F2F2F2;
        height: 204px;
        width: 322px;
        border-radius: 10px;
        border: 0.5px solid #DBDBDB;
    }
    &::after {
        position: absolute;
        content: '';
        right: 12px;
        bottom: 12px;
        width: 36px;
        height: 36px;
        background: url(${ImgBtn}) no-repeat center / 36px 36px;
        border-radius: 50%;
    }
`

const AddProductImgInput = styled.input`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    left: -999999px;
`

const ProductNameLabel = styled(TextLabel)`
    margin-top: 30px;
`

function AddProductPage() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [link, setLink] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [visible, setVisible] = useState(false);
    const [isActive, setisActive] = useState(true);

    const onChangeProductImg = (event) => {
        setItemImage(URL.createObjectURL(event.target.files[0]));
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const saveActive = () => {
        return itemName.length>1&&itemName.length<16&&price.length>0&&link.length>0
            ? setisActive(false)
            : setisActive(true);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('onSubmitHandler');
        history.push('/myprofile');
        dispatch(addProductAction.addProduct(itemName, price, link, token, itemImage));
    }

    const onChangePrice = (event) => {
        const onlyNumber = event.target.value.replace(/[^0-9]/g, '');
        setPrice(onlyNumber)
    }

    return (
        <ProductForm onSubmit={onSubmitHandler}>
            <TopNavRowBox>
                <ArrowLeftLink />
                <MsBtn disabled={isActive}>저장</MsBtn>
            </TopNavRowBox>
            <ProductBox>
                <AddProductSpan>이미지 등록</AddProductSpan>
                <AddProductLabel htmlFor='addProductImg'>
                    <img className='addProduct-img' src={itemImage} alt="상품이미지" />
                </AddProductLabel>
                <AddProductImgInput onChange={onChangeProductImg} id='addProductImg' type='file' accept='image/*'/>
                <ProductNameLabel>상품명</ProductNameLabel>
                <ProductName value = {itemName} onChange={(event) => setItemName(event.target.value)} onKeyUp={saveActive} />
                <TextLabel>가격</TextLabel>
                <ProductPrice value = {price} onChange={onChangePrice} onKeyUp={saveActive} />
                <TextLabel>판매링크</TextLabel>
                <ProductLink value = {link} onChange={(event) => setLink(event.target.value)} onKeyUp={saveActive} />
                <WarningParagraph visible={isActive}>*필수 입력사항을 입력해주세요.</WarningParagraph>
            </ProductBox>
        </ProductForm>
    )
}

export default AddProductPage
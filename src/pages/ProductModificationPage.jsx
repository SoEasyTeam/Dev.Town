import React, { useEffect } from 'react'
import { ArrowLeftLink, TopNavRowBox } from '../components/common/TopNav'
import styled from 'styled-components'
import ImgBtn from '../assets/img-button.png'
import { ProductLink, ProductName, ProductPrice, TextLabel } from '../components/common/TextAciveInput'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../redux/actions/addProductAction'
import { SaveBtn } from '../components/common/Buttons'
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

function ProductModificationPage() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isPrice, setIsPrice] = useState('');
    const [link, setLink] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [isActive, setisActive] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
    // const { product_id } = useParams();
    const uname = useSelector(state=>state.addproduct.product_id);
    console.log(uname,'이름');

    const saveActive = () => {
        return itemName.length>1&&itemName.length<16&&isPrice.length>0&&link.length>0&&previewImage.length>0
            ? setisActive(false)
            : setisActive(true);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('onSubmitHandler');
        dispatch(addProductAction.productModification(itemName, price, link, itemImage));
        history.push('/myprofile');
    }

    const onChangePrice = (event) => {
        let onlyNumber = event.target.value.replace(/[^0-9]/g, '');
        const commaNumber = onlyNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        setIsPrice(commaNumber);
        setPrice(onlyNumber);
    }

    const onChangeProductImg = (event) => {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setItemImage(readerUrl);
        }
    };

    return (
        <ProductForm onSubmit={onSubmitHandler}>
            <TopNavRowBox>
                <ArrowLeftLink />
                <SaveBtn disabled={isActive}>저장ㅇㄹㄴㄹㅇㄴㅇㄹㄴㅇ</SaveBtn>
            </TopNavRowBox>
            <ProductBox>
                <AddProductSpan>이미지 등록</AddProductSpan>
                <AddProductLabel htmlFor='addProductImg'>
                    <img className='addProduct-img' src={itemImage} alt="상품이미지" />
                </AddProductLabel>
                <AddProductImgInput onChange={onChangeProductImg} id='addProductImg' type='file' accept='image/*' />
                <ProductNameLabel>상품명 안녕하세요</ProductNameLabel>
                <ProductName value = {itemName} onChange={(event) => setItemName(event.target.value)} onKeyUp={saveActive} />
                <TextLabel>가격</TextLabel>
                <ProductPrice value = {isPrice} onChange={onChangePrice} onKeyUp={saveActive} />
                <TextLabel>판매링크</TextLabel>
                <ProductLink value = {link} onChange={(event) => setLink(event.target.value)} onKeyUp={saveActive} />
                <WarningParagraph visible={isActive}>*필수 입력사항을 입력해주세요.</WarningParagraph>
            </ProductBox>
        </ProductForm>
    )
}

export default ProductModificationPage;
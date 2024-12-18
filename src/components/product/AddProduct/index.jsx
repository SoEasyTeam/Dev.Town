import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productAction } from '@redux/actions/productAcition.js';
import { SaveBtn } from '@components/common/button/index.style';
import {
    ProductLink,
    ProductName,
    ProductPrice,
    TextLabel,
} from '@components/common/textActiveInput/index.style';
import { ArrowLeftLink } from '@components/common/nav';
import { TopNavRowBox } from '@components/common/nav/index.style.jsx';
import {
    AddProductImgInput,
    AddProductLabel,
    AddProductSpan,
    ProductBox,
    ProductForm,
    ProductNameLabel,
} from '@components/product/AddProduct/index.style';

function AddProduct() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isPrice, setIsPrice] = useState('');
    const [link, setLink] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [isActive, setisActive] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveActive = () => {
        return itemName.length > 1 &&
            itemName.length < 16 &&
            isPrice.length > 0 &&
            link.length > 0 &&
            previewImage.length > 0
            ? setisActive(false)
            : setisActive(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(productAction.addProduct(itemName, price, link, itemImage));
        setTimeout(() => {
            dispatch(productAction.productList());
        }, 300);
        navigate('/myprofile');
    };

    const onChangePrice = (event) => {
        let onlyNumber = event.target.value.replace(/[^0-9]/g, '');
        const commaNumber = onlyNumber
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        setIsPrice(commaNumber);
        setPrice(onlyNumber);
    };

    const onChangeProductImg = (event) => {
        if (parseInt(event.target.files[0].size) > 100000) {
            alert('이미지 파일 100KB 이하로 해주세요.');
        } else {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                let readerUrl = event.target.result;
                setItemImage(readerUrl);
            };
        }
    };
    return (
        <ProductForm onSubmit={onSubmitHandler}>
            <TopNavRowBox>
                <ArrowLeftLink />
                <SaveBtn disabled={isActive}>저장</SaveBtn>
            </TopNavRowBox>
            <ProductBox>
                <AddProductSpan>이미지 등록</AddProductSpan>
                <AddProductLabel htmlFor='addProductImg'>
                    <img
                        className='addProduct-img'
                        src={itemImage}
                        alt='상품이미지'
                    />
                </AddProductLabel>
                <AddProductImgInput
                    onChange={onChangeProductImg}
                    id='addProductImg'
                    type='file'
                    accept='image/*'
                />
                <ProductNameLabel>상품명</ProductNameLabel>
                <ProductName
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                    onKeyUp={saveActive}
                />
                <TextLabel>가격</TextLabel>
                <ProductPrice
                    value={isPrice}
                    onChange={onChangePrice}
                    onKeyUp={saveActive}
                />
                <TextLabel>판매링크</TextLabel>
                <ProductLink
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                    onKeyUp={saveActive}
                />
            </ProductBox>
        </ProductForm>
    );
}

export default AddProduct;

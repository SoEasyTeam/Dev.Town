import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { productAction } from '../../../redux/actions/productAcition.js';
import { SaveBtn } from '../../common/button/index.style';
import { ProductLink, ProductName, ProductPrice, TextLabel } from '../../common/textActiveInput/index.style';
import { ArrowLeftLink } from '../../common/nav';
import {TopNavRowBox} from '../../common/nav/index.style.jsx';
import { AddProductImgInput, AddProductLabel, AddProductSpan, ProductBox, ProductForm, ProductNameLabel } from './index.style.js';

function AddProduct() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isPrice, setIsPrice] = useState('');
    const [link, setLink] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [isActive, setisActive] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();

    const saveActive = () => {
        return itemName.length>1&&itemName.length<16&&isPrice.length>0&&link.length>0&&previewImage.length>0
            ? setisActive(false)
            : setisActive(true);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('onSubmitHandler');
        dispatch(productAction.addProduct(itemName, price, link, itemImage));
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
                <SaveBtn disabled={isActive}>??????</SaveBtn>
            </TopNavRowBox>
            <ProductBox>
                <AddProductSpan>????????? ??????</AddProductSpan>
                <AddProductLabel htmlFor='addProductImg'>
                    <img className='addProduct-img' src={itemImage} alt="???????????????" />
                </AddProductLabel>
                <AddProductImgInput onChange={onChangeProductImg} id='addProductImg' type='file' accept='image/*' />
                <ProductNameLabel>?????????</ProductNameLabel>
                <ProductName value = {itemName} onChange={(event) => setItemName(event.target.value)} onKeyUp={saveActive} />
                <TextLabel>??????</TextLabel>
                <ProductPrice value = {isPrice} onChange={onChangePrice} onKeyUp={saveActive} />
                <TextLabel>????????????</TextLabel>
                <ProductLink value = {link} onChange={(event) => setLink(event.target.value)} onKeyUp={saveActive} />
            </ProductBox>
        </ProductForm>
    )
}

export default AddProduct;
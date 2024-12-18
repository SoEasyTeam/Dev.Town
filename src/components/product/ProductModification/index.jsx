import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productAction } from '@redux/actions/productAcition';
import { SaveBtn } from '@components/common/button/index.style.jsx';
import { ArrowLeftLink } from '@components/common/nav';
import { TopNavRowBox } from '@components/common/nav/index.style.jsx';
import {
    AddProductImgInput,
    AddProductLabel,
    AddProductSpan,
    ProductBox,
    ProductForm,
    ProductNameLabel,
} from './index.style';
import {
    ProductLink,
    ProductName,
    ProductPrice,
    TextLabel,
} from '../../common/textActiveInput/index.style';

function ProductModification() {
    const product_id = useSelector((state) => state.product.product_id);
    const uitemName = useSelector((state) => state.product.itemName);
    const uprice = useSelector((state) => state.product.price);
    const ulink = useSelector((state) => state.product.link);
    const uitemImage = useSelector((state) => state.product.itemImage);

    const [itemName, setItemName] = useState(uitemName);
    const [price, setPrice] = useState(uprice);
    const [isPrice, setIsPrice] = useState(uprice);
    const [link, setLink] = useState(ulink);
    const [itemImage, setItemImage] = useState(uitemImage);
    const [isActive, setisActive] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveActive = () => {
        return itemName.length > 1 &&
            itemName.length < 16 &&
            link.length > 0 &&
            itemImage.length > 0
            ? // &&isPrice.length>0&&link.length>0&&itemImage.length>0
              setisActive(false)
            : setisActive(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(
            productAction.productModification(
                itemName,
                price,
                link,
                itemImage,
                product_id
            )
        );
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
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setItemImage(readerUrl);
        };
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

export default ProductModification;

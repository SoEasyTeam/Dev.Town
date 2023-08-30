import styled from 'styled-components';
import { TextLabel } from '@components/common/textActiveInput/index.style';
import ImgBtn from '@public/assets/images/img-button.png';

export const ProductForm = styled.form``;

export const ProductBox = styled.div`
    width: 390px;
    padding: 0 34px;
    margin: 30px auto 0;
`;

export const AddProductSpan = styled.span`
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin-bottom: 18px;
    color: #767676;
`;

export const AddProductLabel = styled.label`
    position: relative;
    cursor: pointer;
    .addProduct-img {
        object-fit: contain;
        display: block;
        background-color: #f2f2f2;
        height: 204px;
        width: 322px;
        border-radius: 10px;
        border: 0.5px solid #dbdbdb;
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
`;

export const AddProductImgInput = styled.input`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    left: -999999px;
`;

export const ProductNameLabel = styled(TextLabel)`
    margin-top: 30px;
`;

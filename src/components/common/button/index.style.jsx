import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultProfile from '../../../assets/basic-profile-img-2x.png';
import IconFillImg from '../../../assets/upload-file.png';


const LBtn = styled.button`
    width: 322px;
    height: 44px;
    ${({ FormReady }) => {
        return FormReady === true
            ? `background-color: var(--main-color)`
            : `background-color: var(--main-disabled-color)`;
    }}; //Form 입력 완료 시 버튼 색깔 진하게 변화
    border-radius: 44px;
    color: var(--subtitle-text);
`;

const MlBtn = styled(Link)`
    width: 120px;
    border-radius: 44px;
    background-color: var(--main-color);
    color: var(--subtitle-text);
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    padding: 13px;
`//검색하기, 이전페이지(404)

const MBtn = styled.button`
    width: 120px;
    height: 34px;
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `background-color: var(--bg-color)`
            : `background-color: var(--main-color)`;
    }};
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `border: 1px solid var(--border-gray)`
            : `border: none`;
    }};
    border-radius: 30px;
    color: var(--subtitle-text);
`;

const MsBtn = styled.button`
    width: 90px;
    height: 32px;
    background-color: var(--main-color);
    border-radius: 32px;
    color: var(--subtitle-text);
`; //저장, 업로드 버튼

const SaveBtn = styled(MsBtn)`
    ${({ disabled }) => {
        return disabled === false ? `background-color: var(--main-color);` : `background-color: var(--main-disabled-color);`
    }}
`

const SBtn = styled.button`
    width: 56px;
    height: 28px;
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `background-color: var(--bg-color)`
            : `background-color: var(--main-color)`;
    }};
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `border: 1px solid var(--border-gray)`
            : `border: none`;
    }};
    border-radius: 28px;
    color: var(--subtitle-text);
`;

//profilebutton
export const BasicProfileImg = styled.img.attrs({
    src: `${defaultProfile}`,
})`
    width: 50px;
    height:50px;
`

export const ImgUpload = styled.label`
    position: fixed;
    width: 50px;
    height: 50px;
    background-image: url(${IconFillImg});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    z-index: 100;
    bottom:50px;
    right:20%;
`;

export const ImgGray = styled.img`
    width: 100%;
`;

export { LBtn, MlBtn, MBtn, MsBtn, SBtn, SaveBtn };
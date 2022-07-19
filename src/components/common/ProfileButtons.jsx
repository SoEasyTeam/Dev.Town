import styled from 'styled-components';
import defaultProfile from '../../assets/basic-profile-img-2x.png';
import IconFillImg from '../../assets/upload-file.png';
import uploadImageGray from '../../assets/img-button.png';

const BasicProfileImg = styled.img.attrs({
    src: `${defaultProfile}`,
})`
    width: 50px;
    height:50px;
`;

const ImgUpload = styled.label`
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

const ImgGray = styled.img`
    width: 100%;
`;

function DefaultProfileImg() {
    return <BasicProfileImg src={defaultProfile} />;
}

function ImgUploadBtn() {
    return <ImgUpload />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn };

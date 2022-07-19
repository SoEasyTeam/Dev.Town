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

const ImgUpload = styled.img`
    width: 50px;
    height:50px;
    position: absolute;
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
    return <ImgUpload src={IconFillImg} />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn };

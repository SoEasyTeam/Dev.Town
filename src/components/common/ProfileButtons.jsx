import styled from 'styled-components';
import IconFillImg from '../../assets/upload-file.png';
import uploadImageGray from '../../assets/img-button.png';

const BasicProfileImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ImgUpload = styled.img`
    width: 100%;
`;

const ImgGray = styled.img`
    width: 100%;
`;

function DefaultProfileImg({image}) {

    return <BasicProfileImg src={image} />;
}

function ImgUploadBtn() {
    return <ImgUpload src={IconFillImg} />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn };

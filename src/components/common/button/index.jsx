import uploadImageGray from '../../../assets/img-button.png';
import { BasicProfileImg, ImgUpload, ImgGray } from './index.style';

function DefaultProfileImg({ image }) {

    return <BasicProfileImg src={image} />;
}

function ImgUploadBtn({ onChange, htmlFor }) {
    return <ImgUpload onChange={onChange} htmlFor={htmlFor} />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn };

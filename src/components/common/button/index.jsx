import uploadImageGray from '../../../assets/img-button.png';
import { BasicProfileImg, ImgUpload, ImgGray, FollowBtn } from './index.style';

function DefaultProfileImg({ image }) {

    return <BasicProfileImg src={image} />;
}

function ImgUploadBtn({ onChange, htmlFor }) {
    return <ImgUpload onChange={onChange} htmlFor={htmlFor} />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

function FollowMBtn({ changeFollow }) {
    return <FollowBtn onClick={changeFollow} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn, FollowMBtn };

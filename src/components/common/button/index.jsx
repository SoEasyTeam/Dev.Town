import uploadImageGray from '../../../assets/img-button.png';
import { BasicProfileImg, ImgUpload, ImgGray, FollowBtn, FollowsBtn } from './index.style';

function DefaultProfileImg({ image }) {

    return <BasicProfileImg src={image} />;
}

function ImgUploadBtn({ onChange, htmlFor }) {
    return <ImgUpload onChange={onChange} htmlFor={htmlFor} />;
}

function ImgGrayBtn() {
    return <ImgGray src={uploadImageGray} />;
}

function FollowMBtn({ changeFollow, isFollowed }) {
    return <FollowBtn onClick={changeFollow} isFollowed={isFollowed} />;
}

function FollowSBtn({ changeFollow, isFollowed }) {
    return <FollowsBtn onClick={changeFollow} isFollowed={isFollowed} />;
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn, FollowMBtn, FollowSBtn };

import styled from 'styled-components';
import defaultProfile from '../../assets/basic-profile-img-2x.png'
import uploadImage from '../../assets/upload-file-2x.png'
import uploadImageGray from '../../assets/img-button.png'

const BasicProfileImg = styled.img.attrs({
    src: `${defaultProfile}`
    })`
    width: 100%;
    height: 100%;
`;

const ImgUpload = styled.img`
    width: 100%;
`

const ImgGray = styled.img`
    width: 100%;
`

function DefaultProfileImg() {
    return (
        <BasicProfileImg src={defaultProfile} />
    )
}

function ImgUploadBtn() {
    return (
        <ImgUpload src={uploadImage} />
    )
}

function ImgGrayBtn() {
    return (
        <ImgGray src={uploadImageGray} />
    )
}

export { DefaultProfileImg, ImgUploadBtn, ImgGrayBtn }
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MBtn } from '../../common/button/index.style';
// import UploadfileImg from '../assets/upload-file.png';
import UploadfileImg from '../../../assets/upload-file.png';
import { css } from 'styled-components';


export const ProfileName = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`

export const ProfileAccount = styled.span`
    display: inline-block;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`

export const ProfileIntro = styled.p`
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
`

export const FollowLink = styled(Link)`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

export const MyProfileBtn = styled(MBtn)`
    background-color: var(--bg-color);
    border: 1px solid #DBDBDB;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileAreaCol = styled.article`
    display: flex;
    flex-direction: column;
    width: 100vw;
    text-align: center;
    border-bottom: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .profileTop{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 29.5px;
        padding: 0 18px;
        .followers {
            width: 43px;
        }
        .followings {
            width: 43px;
        }
        p {
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            color: #767676;
            margin-top: 6px;
        }
        .profileTopImg {
            width: 110px;
        }
    }
    .profileMiddle {
        margin-top: 16px; 
    }
    .profileBottom {
        display: flex;
        gap: 12px;
        margin: 24px auto 25.5px;
    }
`

export const ProfileImg = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 1px solid var(--border-gray);
`;

export const CircleBtns = styled.button`
    width: 34px;
    height: 34px;
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    img {
        display: block;
        width: 20px;
        margin: 0 auto;
    }
`

export const ProfileSection = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin: 0 auto;
font-family: 'Spoqa Han Sans Neo';
background-color: #F2F2F2;
min-height: 892px;
`

export const ProfileModificationForm = styled.form`
    
`
export const ProfileSettingBox = styled.form`
    width: 100vw;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    .input-cont {
        margin: 0 auto;
    }
`;

export const ProfileImgInput = styled.input`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    left: -999999px;
`

export const AddProfileLabel = styled.label`
    margin: 0 auto 30px;
    position: relative;
    cursor: pointer;
    .addprofile-img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
    }
    &::after {
        position: absolute;
        content: '';
        right: 0px;
        bottom: 0px;
        width: 36px;
        height: 36px;
        background: url(${UploadfileImg}) no-repeat center / 36px 36px;
        border-radius: 50%;
    }
`;

export const FollowMBtn = styled(MBtn)`
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    &::after {
            ${(props) => props.isFollowed
        ? css`
            content: '언팔로우';
            `
        : css`
            content: '팔로우';
            `
    };
        }
`;
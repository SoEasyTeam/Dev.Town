import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingImg from '../../../assets/icon/s-icon-more-vertical.png'
import { ProfileLogoImg, NameIdBox, NickNameP, IdP } from '../search/index.style'
import { UserFollowBox } from '../../list/followList/index.style'

export const SettingBtn = styled.button`
background-image: url(${SettingImg});
width: 18px;
height: 18px;
position: absolute;
right: 0px;
top: 4px;
cursor: pointer;
`;

export const HomePostProfileNickName = styled(NickNameP)`
margin-bottom: 2px;
`;

export const HomePostProfileLogoImg = styled(ProfileLogoImg)`
width: 42px;
height: 42px;
`;

export const HomePostBox = styled.div`
display: block;
margin: 0 auto;
padding-bottom: 4px;
padding-top: 30px;
`;

export const HomePostProfileBox = styled(UserFollowBox)`
margin-bottom: 16px;
width: 100%;
`;

export const HomePostSmallBox = styled.div`
margin-left: 54px;
display: block;
.post-img {
    margin-bottom: 12px;
    width: 304px;
    border: 0.5px solid #dbdbdb;
    border-radius: 10px;
}
`;

export const HomePostParagraph = styled.p`
margin-bottom: 16px;
font-family: 'Spoqa Han Sans Neo';
font-size: 14px;
font-weight: 400;
line-height: 18px;
text-align: left;
`;

export const DateParagraph = styled.p`
font-family: 'Spoqa Han Sans Neo';
font-size: 10px;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
margin-top: 16px;
margin-left: 54px;
color: #767676;
`;

export const LikePostBox = styled.div`
display: flex;
gap: 22px;
margin-left: 54px;
.like-btn {
    position: relative;
}
.heart-img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}
.likecount-span {
    position: absolute;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: #767676;
    top: 3px;
}
.comment-btn {
    position: relative;
}
.comment-img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}
.comment-span {
    position: absolute;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: #767676;
    top: 3px;
}
`;

export const HomePostProfileLink = styled(Link)`
    display: inherit;  
`

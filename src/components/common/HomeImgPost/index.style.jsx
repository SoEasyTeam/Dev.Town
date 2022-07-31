import { Link } from "react-router-dom";
import styled from "styled-components";
import SettingImg from '../../../assets/icon/s-icon-more-vertical.png';
import { ProfileLogoImg, NickNameP } from '../search/index.style';
import { UserFollowBox } from '../../list/followList/index.style';

export const SettingBtn = styled.button`
    background-image: url(${SettingImg});
    width: 18px;
    height: 18px;
    position: absolute;
    right: 0px;
    top: 4px;
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
    width: 358px;
    margin: 0 auto;
    padding-bottom: 4px;
`;

export const HomePostProfileBox = styled(UserFollowBox)`
    margin-bottom: 16px;
    width: 100%;
`;

export const HomePostSmallLink = styled(Link)`
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

export const HomePostProfileLink = styled(Link)`
    display: inherit;   
`

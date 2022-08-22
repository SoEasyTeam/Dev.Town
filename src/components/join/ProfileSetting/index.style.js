import styled from 'styled-components';
import UploadfileImg from '../../../assets/upload-file.png';
import { LBtn } from '../../common/button/index.style';

export const ProfileSettingForm = styled.form`
    width: 100vw;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    .profile-title {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: var(--main-title-color);
        margin-bottom: 12px;
    }
    .subtitle-p {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: var(--subtitle-text);
        margin-bottom: 30px;
    }
    .input-cont {
        margin: 0 auto;
    }
`;

export const Profilelabel = styled.label`
    margin: 0 auto 30px;
    position: relative;
    cursor: pointer;
    .joinprofile-img {
        object-fit: cover;
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

export const ProfileImgInput = styled.input`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    left: -999999px;
`;

export const SignUpBtn = styled(LBtn)`
    margin: 14px auto 0;
    ${({ disabled }) => {
        return disabled === false
            ? `background-color: var(--main-color);`
            : `background-color: var(--main-disabled-color);`;
    }}
`;

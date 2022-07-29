import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import JoinProfileImg from '../assets/basic-profile-img.png';
import UploadfileImg from '../assets/upload-file.png';
import { LBtn } from '../components/common/button/index.style';
import {
    ProfileId,
    ProfileIntroduce,
    ProfileNameInput,
    TextLabel,
} from '../components/common/textActiveInput/index.style';
import { useDispatch, useSelector } from 'react-redux'
import { joinAction } from '../redux/actions/joinAction';
import { WarningParagraph } from './LoginPage';

const ProfileSettingForm = styled.form`
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

const ProfileImgInput = styled.input`
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    left: -999999px;
`

const SignUpBtn = styled(LBtn)`
    margin: 14px auto 0;
    ${({ disabled }) => {
        return disabled === false ? `background-color: var(--main-color);` : `background-color: var(--main-disabled-color);`
    }}
`;

function ProfileSettingPage() {
    const [username, setUsername] = useState('');
    const [accountname, setAccountname] = useState('');
    const [intro, setIntro] = useState('');
    const [isActive, setIsActive] = useState('');
    const history = useHistory();
    const email = useSelector(state => state.join.email);
    const password = useSelector(state => state.join.password);
    const message = useSelector(state => state.joinfinal.message);
    const dispatch = useDispatch();
    const [itemImage, setItemImage] = useState(JoinProfileImg);


    const onChangeProfileImg = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setItemImage(readerUrl);
        }
    };

    const signUpActive = () => {
        return (username.length > 1 && username.length < 11 && accountname.length > 0 && intro.length > 0)
            ? setIsActive(false)
            : setIsActive(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('login user function issue');
        dispatch(joinAction.joinfinal(email, password, username, accountname, intro, itemImage));
    }

    useEffect(() => {
        console.log(message);
        if (message === '회원가입 성공') {
            history.push('/login');
        }
    }, [message])

    return (
        <ProfileSettingForm onSubmit={onSubmitHandler}>
            <h2 className='profile-title'>프로필 설정</h2>
            <p className='subtitle-p'>나중에 언제든지 변경할 수 있습니다.</p>
            <Profilelabel htmlFor='profileImg'>
                <img
                    className='joinprofile-img'
                    src={itemImage}
                    alt='프로필이미지'
                />
            </Profilelabel>
            <ProfileImgInput onChange={onChangeProfileImg} id='profileImg' type='file' accept='image/*' />
            <div className='input-cont'>
                <TextLabel>사용자 이름</TextLabel>
                <ProfileNameInput value={username} onChange={(event) => setUsername(event.target.value)} onKeyUp={signUpActive} />
            </div>
            <div className='input-cont'>
                <TextLabel>계정 ID</TextLabel>
                <ProfileId value={accountname} onChange={(event) => setAccountname(event.target.value)} onKeyUp={signUpActive} />
            </div>
            <div className='input-cont'>
                <TextLabel>소개</TextLabel>
                <ProfileIntroduce value={intro} onChange={(event) => setIntro(event.target.value)} onKeyUp={signUpActive} />
            </div>
            <SignUpBtn disabled={isActive}>감귤마켓 시작하기</SignUpBtn>
        </ProfileSettingForm>
    );
}

export default ProfileSettingPage;
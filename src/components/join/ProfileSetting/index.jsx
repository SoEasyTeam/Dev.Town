import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { joinAction } from '../../../redux/actions/joinAction';
import JoinProfileImg from '../../../assets/basic-profile-img.png';
import { ProfileImgInput, Profilelabel, ProfileSettingForm, SignUpBtn } from './index.style';
import { ProfileId, ProfileIntroduce, ProfileNameInput, TextLabel } from '../../common/textActiveInput/index.style';

function ProfileSetting() {
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
        return (username.length > 1 && username.length < 11 && accountname.length>0 && intro.length > 0)
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
        if(message === '회원가입 성공'){
            history.push('/login');
        }
    },[message])

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
                <ProfileNameInput value={username} onChange={(event) => setUsername(event.target.value)} onKeyUp = {signUpActive} />
            </div>
            <div className='input-cont'>
                <TextLabel>계정 ID</TextLabel>
                <ProfileId value={accountname} onChange={(event) => setAccountname(event.target.value)} onKeyUp = {signUpActive}/>
            </div>
            <div className='input-cont'>
                <TextLabel>소개</TextLabel>
                <ProfileIntroduce value={intro} onChange={(event) => setIntro(event.target.value)} onKeyUp = {signUpActive} />
            </div>
            <SignUpBtn disabled={isActive}>감귤마켓 시작하기</SignUpBtn>
        </ProfileSettingForm>
    );
}

export default ProfileSetting;
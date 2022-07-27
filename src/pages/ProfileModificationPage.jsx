import React from 'react';
import styled from 'styled-components';
import { TopNavRowBox, ArrowLeftLink } from '../components/common/TopNav'
import { SaveBtn } from '../components/common/Buttons'
import JoinProfileImg from '../assets/basic-profile-img.png';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import UploadfileImg from '../assets/upload-file.png';
import {
    ProfileId,
    ProfileIntroduce,
    ProfileNameInput,
    TextLabel,
} from '../components/common/TextAciveInput';
import { profileAction } from '../redux/actions/profileAction'

const ProfileModificationForm = styled.form`
    
`
const ProfileSettingBox = styled.form`
    width: 100vw;
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    .input-cont {
        margin: 0 auto;
    }
`;

const ProfileImgInput = styled.input`
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

function ProfileModificationPage() {
    const username = useSelector(state => state.profile.username);
    const userimage = useSelector(state => state.profile.image);
    const useraccountname = useSelector(state => state.profile.accountname);
    const userintro = useSelector(state => state.profile.intro);

    const [name, setname] = useState(username);
    const [image, setImage] = useState(userimage);
    const [accountname, setAccountname] = useState(useraccountname);
    const [intro, setIntro] = useState(userintro);
    const [isActive, setIsActive] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('수정 submitHandler');
        dispatch(profileAction.profileModification(name, image, accountname, intro));
        history.push('/myprofile');
    }

    const onChangeProfileImg = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setImage(readerUrl);
        }
    };

    const changeActive = () => {
        return (name.length > 1 && name.length < 11 && accountname.length > 0 && intro.length > 0)
            ? setIsActive(false)
            : setIsActive(true);
    };

    return (
        <ProfileModificationForm onSubmit={onSubmitHandler}>
            <TopNavRowBox>
                <ArrowLeftLink />
                <SaveBtn disabled={isActive}>저장</SaveBtn>
            </TopNavRowBox>
            <ProfileSettingBox id='profileJoinForm' method='post'>
                <h1 className='ir'>프로필 수정</h1>
                <AddProfileLabel htmlFor='addprofileImg'>
                    <img
                        className='addprofile-img'
                        src={image}
                        alt='프로필이미지'
                    />
                </AddProfileLabel>
                <ProfileImgInput onChange={onChangeProfileImg} id='addprofileImg' type='file' accept='image/*' />
                <div className='input-cont'>
                    <TextLabel>사용자 이름</TextLabel>
                    <ProfileNameInput value={name} onChange={(event) => setname(event.target.value)} onKeyUp={changeActive} />
                </div>
                <div className='input-cont'>
                    <TextLabel>계정 ID</TextLabel>
                    <ProfileId value={accountname} onChange={(event) => setAccountname(event.target.value)} onKeyUp={changeActive} />
                </div>
                <div className='input-cont'>
                    <TextLabel>소개</TextLabel>
                    <ProfileIntroduce value={intro} onChange={(event) => setIntro(event.target.value)} onKeyUp={changeActive} />
                </div>
            </ProfileSettingBox>
        </ProfileModificationForm>
    );
}

export default ProfileModificationPage;

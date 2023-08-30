import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../redux/actions/profileAction';
import { useNavigate } from 'react-router-dom';
import { TopNavRowBox } from '../components/common/nav/index.style';
import { ArrowLeftLink } from '../components/common/nav';
import { SaveBtn } from '../components/common/button/index.style';
import {
    ProfileId,
    ProfileIntroduce,
    ProfileNameInput,
    TextLabel,
} from '../components/common/textActiveInput/index.style';
import {
    ProfileModificationForm,
    ProfileSettingBox,
    ProfileImgInput,
    AddProfileLabel,
} from '../components/profile/userProfile/index.style';
import { productAction } from '../redux/actions/productAcition';

function ProfileModificationPage() {
    const userData = useSelector((state) => state.profile.userData);
    const navigate = useNavigate();

    const username = userData.profile.username;
    const userimage = userData.profile.image;
    const useraccountname = userData.profile.accountname;
    const userintro = userData.profile.intro;

    const [name, setname] = useState(username);
    const [image, setImage] = useState(userimage);
    const [accountname, setAccountname] = useState(useraccountname);
    const [intro, setIntro] = useState(userintro);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(
            profileAction.profileModification(name, image, accountname, intro)
        );
        setTimeout(() => {
            dispatch(profileAction.profile());
        }, 300);
        navigate('/myprofile');
    };

    const onChangeProfileImg = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            let readerUrl = event.target.result;
            setImage(readerUrl);
        };
    };

    const changeActive = () => {
        return name.length > 1 &&
            name.length < 11 &&
            accountname.length > 0 &&
            intro.length > 0
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
                <ProfileImgInput
                    onChange={onChangeProfileImg}
                    id='addprofileImg'
                    type='file'
                    accept='image/*'
                />
                <div className='input-cont'>
                    <TextLabel>사용자 이름</TextLabel>
                    <ProfileNameInput
                        value={name}
                        onChange={(event) => setname(event.target.value)}
                        onKeyUp={changeActive}
                    />
                </div>
                <div className='input-cont'>
                    <TextLabel>계정 ID</TextLabel>
                    <ProfileId
                        value={accountname}
                        onChange={(event) => setAccountname(event.target.value)}
                        onKeyUp={changeActive}
                    />
                </div>
                <div className='input-cont'>
                    <TextLabel>소개</TextLabel>
                    <ProfileIntroduce
                        value={intro}
                        onChange={(event) => setIntro(event.target.value)}
                        onKeyUp={changeActive}
                    />
                </div>
            </ProfileSettingBox>
        </ProfileModificationForm>
    );
}

export default ProfileModificationPage;

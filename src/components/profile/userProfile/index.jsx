import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { MBtn } from '../../common/button/index.style';
import { profileAction } from '../../../redux/actions/profileAction';
import IconMesssageImg from '../../../assets/icon/icon-message-circle.png';
import IconShareImg from '../../../assets/icon/icon-share.png';
import { ProfileName, ProfileAccount, ProfileIntro, FollowLink, MyProfileBtn, ProfileAreaCol, ProfileImg, CircleBtns } from './index.style';

function UserProfile() {
    const [userData, setUserData] = useState()
    const [isFollow, setIsFollow] = useState();
    const [isFollowWord, setIsFollowWord] = useState('팔로우');
    const Myaccountname = useSelector(state => state.auth.accountname);
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('token');

    const getData = async () => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${Myaccountname}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        console.log(json)
        setUserData(json)
    }

    useEffect(() => {
        getData()
    }, [])

    if (!userData) {
        return <div>데이터 없을 때 화면 띄우기</div>
    }

    function changeIsFollow() {
        console.log('팔로우취소 가동!')
        setIsFollow(!isFollow);
        if (isFollowWord === '팔로우') {
            setIsFollowWord('언팔로우')
        } else {
            setIsFollowWord('팔로우')
        }
    }

    console.log(userData)

    const onClickModal = (event) => {
        event.preventDefault();
        dispatch(profileAction.profileModificationModal(userData));
        history.push('/profilemodification');
    }

    return (
        <>
            <ProfileAreaCol>
                <div className='profileTop'>
                    <div className='followers'>
                        <FollowLink to='/follower'>{userData.profile.followerCount}</FollowLink>
                        <p>followers</p>
                    </div>
                    <div className='profileTopImg'>
                        <ProfileImg src={userData.profile.image} alt='프로필이미지' />
                    </div>
                    <div className='followings'>
                        <FollowLink to='/following'>{userData.profile.followingCount}</FollowLink>
                        <p>followings</p>
                    </div>
                </div>
                <div className='profileMiddle'>
                    <ProfileName>{userData.profile.username}</ProfileName>
                    <ProfileAccount>@ {userData.profile.accountname}</ProfileAccount>
                    <ProfileIntro>{userData.profile.intro}</ProfileIntro>
                </div>
                <div className='profileBottom'>
                    {Myaccountname !== userData.profile.accountname ? (
                        <>
                            <CircleBtns>
                                <img src={IconMesssageImg} alt='채팅링크' />
                            </CircleBtns>
                            <MBtn onClick={changeIsFollow} isFollowed={isFollow}>{isFollowWord}</MBtn>
                            <CircleBtns>
                                <img src={IconShareImg} alt='공유링크' />
                            </CircleBtns>
                        </>
                    ) : (
                        <>
                            <MyProfileBtn onClick={onClickModal} >프로필 수정</MyProfileBtn>
                            <MyProfileBtn as={Link} to='/product'>상품 등록</MyProfileBtn>
                        </>
                    )}
                </div>
            </ProfileAreaCol>
        </>
    )
}

export default UserProfile;
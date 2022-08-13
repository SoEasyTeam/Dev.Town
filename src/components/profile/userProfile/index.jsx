import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { profileAction } from '../../../redux/actions/profileAction';
import IconMesssageImg from '../../../assets/icon/icon-message-circle.png';
import IconShareImg from '../../../assets/icon/icon-share.png';
import { ProfileName, ProfileAccount, ProfileIntro, FollowLink, MyProfileBtn, ProfileAreaCol, ProfileImg, CircleBtns, FollowMBtn } from './index.style';

function UserProfile(props) {
    const [userData, setUserData] = useState();
    const [isFollow, setIsFollow] = useState();
    const [isFollowWord, setIsFollowWord] = useState('팔로우');
    const [isUnfollowWord, setIsUnfollowWord] = useState('언팔로우');
    const Myaccountname = sessionStorage.getItem('accountname');
    const dispatch = useDispatch();
    const history = useHistory();
    const token = sessionStorage.getItem('token');

    const getData = async (account) => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${account}`, {
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
        if (props.accountname) {
            getData(props.accountname)
        }
        else {
            getData(Myaccountname)
        }
    }, [])


    if (!userData) {
        return <></>
    }


    function changeIsFollow() {
        console.log('팔로우취소 가동!', userData.profile.isfollow)
        setIsFollow(!isFollow);

        if (isFollowWord === '팔로우' || isUnfollowWord === '언팔로우') {
            setIsFollowWord('언팔로우')
            setIsUnfollowWord('팔로우')
        } else {
            setIsFollowWord('팔로우')
            setIsUnfollowWord('언팔로우')
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
                        <FollowLink to={{ pathname: '/follower', search: `?id=${userData.profile.accountname}` }} >{userData.profile.followerCount}</FollowLink>
                        <p>followers</p>
                    </div>
                    <div className='profileTopImg'>
                        <ProfileImg src={userData.profile.image} alt='프로필이미지' />
                    </div>
                    <div className='followings'>
                        <FollowLink to={{ pathname: '/following', search: `?id=${userData.profile.accountname}` }}>{userData.profile.followingCount}</FollowLink>
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
                            <FollowMBtn onClick={changeIsFollow} isFollowed={userData.profile.isfollow}>{userData.profile.isfollow ? isUnfollowWord : isFollowWord}</FollowMBtn>
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
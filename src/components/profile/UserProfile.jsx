import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { MBtn } from '../common/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../../redux/actions/profileAction';
import IconMesssageImg from '../../assets/icon/icon-message-circle.png';
import IconShareImg from '../../assets/icon/icon-share.png';

const ProfileName = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`

const ProfileAccount = styled.span`
    display: inline-block;
    margin-top: 6px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
`

const ProfileIntro = styled.p`
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
`

const FollowLink = styled(Link)`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const MyProfileBtn = styled(MBtn)`
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

const ProfileAreaCol = styled.article`
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

const CircleBtns = styled.button`
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

function UserProfile() {
    const [userData, setUserData] = useState()
    const [isFollow, setIsFollow] = useState();
    const [isFollowWord, setIsFollowWord] = useState('팔로우');
    // const userId = useSelector(state => state.auth);
    // console.log('유저:', userId);
    // authenticateReducer에서 받아온 상태 값
    // const token = useSelector(state => state.auth.token);
    const Myaccountname = useSelector(state => state.auth.accountname);
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(token)
    // console.log(accountname);

    // profileReducer에서 받아온 상태 값
    // const followerCount = useSelector(state => state.profile.followerCount);
    // const followingCount = useSelector(state => state.profile.followingCount);
    // const username = useSelector(state => state.profile.username);
    // const intro = useSelector(state => state.profile.intro);
    // const Youraccountname = useSelector(state => state.profile.accountname);
    // const isfollow = useSelector(state => state.profile.isfollow);
    // const profileImg = useSelector(state => state.profile.image);
    // console.log('isfollow?', isfollow);
    // console.log(followingCount);
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

        // profileAction에 있는 profile 함수로 94번째 95번째 줄에서 가져온 token과 accountname의 값을 보내준다.
        // dispatch(profileAction.profile(token, Myaccountname));
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




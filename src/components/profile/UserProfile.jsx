import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MBtn } from '../../components/common/Buttons';
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
const ProfileImg = styled.img`
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

function UserProfile({token, accountname}) {
    const dispatch = useDispatch();

    // authenticateReducer에서 받아온 상태 값
    // const token = localStorage.getItem('token');

    // profileReducer에서 받아온 상태 값
    // const accountname = useSelector(state => state.auth.accountname);
    dispatch(profileAction.profile(token, accountname));

    const profileusername = useSelector(state=>state.profile.username);
    const profileimage = useSelector(state=>state.profile.image);
    const profileintro = useSelector(state=>state.profile.intro);
    const profileaccountname = useSelector(state=>state.profile.accountname);

    const followerCount = useSelector(state => state.profile.followerCount);
    const followingCount = useSelector(state => state.profile.followingCount);
    const Youraccountname = useSelector(state => state.profile.accountname);
    const isfollow = useSelector(state => state.profile.isfollow);
    useEffect(() => {
    }, [profileusername, profileimage, profileintro, profileaccountname])

    const [isFollow, setIsFollow] = useState(isfollow);
    const [isFollowWord, setIsFollowWord] = useState('팔로우');
    function changeIsFollow() {
        console.log('팔로우취소 가동!')
        setIsFollow(!isFollow);
        if (isFollowWord === '팔로우') {
            setIsFollowWord('언팔로우')
        } else {
            setIsFollowWord('팔로우')
        }
    }

    return (
        <>
            <ProfileAreaCol>
                <div className='profileTop'>
                    <div className='followers'>
                        <FollowLink to='/follower'>{followerCount}</FollowLink>
                        <p>followers</p>
                    </div>
                    <div className='profileTopImg'>
                        <ProfileImg src={profileimage} alt='프로필이미지' />
                    </div>
                    <div className='followings'>
                        <FollowLink to='/following'>{followingCount}</FollowLink>
                        <p>followings</p>
                    </div>
                </div>
                <div className='profileMiddle'>
                    <ProfileName>{profileusername}</ProfileName>
                    <ProfileAccount>@ {profileaccountname}</ProfileAccount>
                    <ProfileIntro>{profileintro}</ProfileIntro>
                </div>
                <div className='profileBottom'>
                    {accountname !== Youraccountname ? (
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
                            <MyProfileBtn as={Link} to='/profilemodification'>프로필 수정</MyProfileBtn>
                            <MyProfileBtn as={Link} to='/product'>상품 등록</MyProfileBtn>
                        </>
                    )}
                </div>
            </ProfileAreaCol>
        </>
    )
}
export default UserProfile;
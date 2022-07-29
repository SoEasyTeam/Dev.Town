import React from 'react';
import TabMenu from '../components/common/TabMenu';
import { TopBasicNav } from '../components/common/nav';
import styled from 'styled-components';
import ProfileImg from '../assets/basic-profile-img.png';
import { Link } from 'react-router-dom';

const ChatItemLink = styled(Link)`
    width: 100%;
    display: flex;
    position: relative;
    label {
        .login-box {
            width: 12px;
            height: 12px;
            position: absolute;
            background: #f26e22;
            border-radius: 50%;
        }
        .profile-img {
            width: 42px;
            height: 42px;
            margin-right: 12px;
        }
    }
    .ChatName-cont {
        margin-right: 13px;
        position: relative;
        .ChatName-p {
            margin-bottom: 4px;
            font-family: 'Spoqa Han Sans Neo';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
        }
        .ChatRecentMessage-p {
            font-family: 'Spoqa Han Sans Neo';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: var(--subtitle-text);
        }
    }
    .chatDate-p {
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        color: var(--border-gray);
        position: absolute;
        right: 0;
        bottom: 6px;
    }
`;

const ChatListBox = styled.div`
    width: 100vw;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function ChatList() {
    return (
        <>
            <ChatItemLink to='#'>
                <label>
                    <div className='login-box'></div>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                </label>
                <div className='ChatName-cont'>
                    <p className='ChatName-p'>애월읍 위니브 감귤농장</p>
                    <p className='ChatRecentMessage-p'>
                        이번에 정정 언제하맨 마씸?
                    </p>
                </div>
                <p className='chatDate-p'>2020.10.25</p>
            </ChatItemLink>
        </>
    );
}

function ChatPage() {
    return (
        <>
            <TopBasicNav />
            <ChatListBox>
                <ChatList />
                <ChatItemLink to='#'>
                    <label>
                        <div className='login-box'></div>
                        <img
                            className='profile-img'
                            src={ProfileImg}
                            alt='프로필 이미지'
                        />
                    </label>
                    <div className='ChatName-cont'>
                        <p className='ChatName-p'>제주감귤마을</p>
                        <p className='ChatRecentMessage-p'>
                            깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...
                        </p>
                    </div>
                    <p className='chatDate-p'>2020.10.25</p>
                </ChatItemLink>
                <ChatItemLink to='#'>
                    <label>
                        <img
                            className='profile-img'
                            src={ProfileImg}
                            alt='프로필 이미지'
                        />
                    </label>
                    <div className='ChatName-cont'>
                        <p className='ChatName-p'>누구네 농장 친환경 한라봉</p>
                        <p className='ChatRecentMessage-p'>
                            내 차는 내가 평가한다. 오픈 이벤트에 참여 하...
                        </p>
                    </div>
                    <p className='chatDate-p'>2020.10.25</p>
                </ChatItemLink>
            </ChatListBox>
            <TabMenu />
        </>
    );
}

export default ChatPage;

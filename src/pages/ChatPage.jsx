import React from 'react';
import TabMenu from '../components/common/TabMenu';
import { TopBasicNav } from '../components/common/TopNav';
import HomePost from '../components/common/HomePost';
import HomeImgPost from '../components/common/HomeImgPost';
import styled from 'styled-components';
import ProfileImg from '../assets/basic-profile-img.png';

const ChatItemBox = styled.div`
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
        position: absolute;
        bottom: 0;
        right: 0;
        font-family: 'Spoqa Han Sans Neo';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        color: var(--border-gray);
    }
`;

const ChatListBox = styled.div`
    width: 100vw;
    padding: 24px 16px;
`;

function ChatList() {
    return (
        <>
            <ChatItemBox>
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
            </ChatItemBox>
        </>
    );
}

function ChatPage() {
    return (
        <>
            <TopBasicNav />
            <ChatListBox>
                <ChatList />
            </ChatListBox>
        </>
    );
}

export default ChatPage;

import React from 'react'
import styled from 'styled-components'
import { TopChatNav } from '../components/common/TopNav'
import Comment from '../components/common/Comment';
import ProfileImg from '../assets/basic-profile-img.png'
import HomePost from '../components/common/HomePost';

const ChatMainRoomBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    padding: 224px 16px 20px;
    .chat-cont {
        display: flex;
        position: relative;
        margin-bottom: 9px;
        .profile-img{
            width: 42px;
            height: 42px;
            margin-right: 12px;
        }
        .message-cont{
            padding: 12px;
            box-sizing: border-box;
            width: 240px;
            background: #FFFFFF;
            border: 1px solid #C4C4C4;
            border-radius: 0 4% 4% 4%;
            margin-right: 6px;
            .message-txt{
                font-family: 'Spoqa Han Sans Neo';
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
            }
        }
        .time-span{
            position: absolute;
            bottom: 0px;
            left: 300px;
            color: var(--subtitle-text);
        }
    }
`

function ChatItemPage() {
    return (
        <>
            <TopChatNav/>
            <ChatMainRoomBox>
                <div className='chat-cont'>
                    <img className='profile-img' src={ProfileImg} alt="프로필 이미지" />
                    <div className='message-cont'>
                        <p className='message-txt'>옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.</p>
                    </div>
                    <span className='time-span'>12:39</span>
                </div>
                <div className='chat-cont'>
                    <img className='profile-img' src={ProfileImg} alt="프로필 이미지" />
                    <div className='message-cont'>
                        <p className='message-txt'>안녕하세요. 감귤 사고싶어요요요요요</p>
                    </div>
                    <span className='time-span'>12:41</span>
                </div>
            </ChatMainRoomBox>
            <Comment/>
        </>
    )
}

export default ChatItemPage
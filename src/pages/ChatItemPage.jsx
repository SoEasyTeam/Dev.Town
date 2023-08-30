import React from 'react';
import styled from 'styled-components';
import { TopChatNav } from '@components/common/nav';
import {
    CommentBox,
    CommentInput,
    CommentSubmitBtn,
    MyProfileOnComment,
    ProfileImgBox,
} from '@components/comment/commentInput/index.style';
import { useSelector } from 'react-redux';

const ChatMainItem = styled.div`
    width: 100vw;
`;

const ChatMainRoomBox = styled.div`
    width: 100%;
    height: 93vh;
    background-color: #f2f2f2;
    padding: 20px 16px 20px;
    .chat-cont {
        display: flex;
        position: relative;
        margin-bottom: 9px;
        .profile-img {
            width: 42px;
            height: 42px;
            margin-right: 12px;
        }
        .message-cont {
            padding: 12px;
            box-sizing: border-box;
            width: 240px;
            background: #ffffff;
            border: 1px solid #c4c4c4;
            border-radius: 0 4% 4% 4%;
            margin-right: 6px;
            .message-txt {
                font-family: 'Spoqa Han Sans Neo';
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
            }
        }
        .time-span {
            position: absolute;
            bottom: 0px;
            left: 300px;
            color: var(--subtitle-text);
        }
    }
    .mychatcont {
        float: right;
        background: #b6e546;
        border-radius: 6% 0% 6% 6%;
        font-family: 'Spoqa Han Sans Neo';
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        width: 240px;
        padding: 12px;
    }
`;

function ChatItemPage() {
    const image = useSelector((state) => state.auth.image);
    return (
        <ChatMainItem>
            <TopChatNav />
            <ChatMainRoomBox>
                <div className='chat-cont'>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                    <div className='message-cont'>
                        <p className='message-txt'>
                            React의 개념과 장점, 그리고 컴포넌트란 무엇인가요?
                        </p>
                    </div>
                    <span className='time-span'>12:39</span>
                </div>
                <div className='chat-cont'>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                    <div className='message-cont'>
                        <p className='message-txt'>
                            리액트의 내부 작동 원리를 재조정 (Reconciliation)
                            개념과 함께 설명하세요.
                        </p>
                    </div>
                    <span className='time-span'>12:41</span>
                </div>
                <div className='chat-cont'>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                    <div className='message-cont'>
                        <p className='message-txt'>
                            옷리액트에 있는 라이프사이클과 각 라이프사이클의
                            역할을 설명하세요.
                        </p>
                    </div>
                    <span className='time-span'>12:42</span>
                </div>
                <div className='mychatcont'>
                    리액트의 라이프사이클은 크게 4가지로 설명할 수 있습니다.
                    최초로 컴포넌트 객체가 생성될 때 한 번 수행되어지는
                    componentDidMount()와 초기에 화면을 그려줄 때와, 업데이트가
                    될 때 호출되는 render()가 있습니다. 그리고 컴포넌트의 속성
                    값 또는 상태값이 변경되면 호출되어지는
                    componentDidUpdate()와 마지막으로 컴포넌트가 소멸될 때
                    호출되어지는 componentWillUnmount()가 라이프사이클의
                    역할입니다.
                </div>
            </ChatMainRoomBox>
            <CommentBox>
                <ProfileImgBox>
                    <MyProfileOnComment src={image} />
                </ProfileImgBox>
                <CommentInput placeholder='메시지 입력하기...' />
                <CommentSubmitBtn>전송</CommentSubmitBtn>
            </CommentBox>
        </ChatMainItem>
    );
}

export default ChatItemPage;

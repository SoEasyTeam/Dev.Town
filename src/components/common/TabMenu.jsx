import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import LinkHomeImg from '../../assets/icon/icon-home.svg';
import LinkHomeClickImg from '../../assets/icon-home-fill.png'
import LinkChatClickImg from '../../assets/icon-message-circle-fill.png'
import LinkProfileClickImg from '../../assets/icon-user-fill.png'
import LinkChatImg from '../../assets/icon/icon-message-circle.svg';
import LinkIconProfileImg from '../../assets/icon/icon-user.svg';
import LinkIconEditImg from '../../assets/icon/icon-edit.svg';
import LinkIconEditClickImg from '../../assets/icon-fill-post.png';
import { useState } from 'react';
import { useEffect } from 'react';

const BlankBox = styled.div`
    width: 100vw;
    height: 60px;
`

const TabMenuRowList = styled.ul`
    width: 100vw;
    position: fixed;
    z-index: 10;
    bottom: 0;
    background-color: var(--bg-color);
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid #dbdbdb;

const TabMenuItem = styled.li`
`;

const TabMenuLink = styled(Link)`
    display: block;
    /* flex-direction: column; */
    padding: 12px 30px 6px 30px;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: var(--subtitle-text);
    &::before {
        content: '';
        background: no-repeat center / contain;
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
        margin-bottom: 4px;
    }
    &.home-link::before{
        ${({ isActive }) => {
        return isActive === 1 ? `background-image: url(${LinkHomeClickImg});` : `background-image: url(${LinkHomeImg});`
    }}
    }
    &.chat-link::before{
        ${({ isActive }) => {
        return isActive === 2 ? `background-image: url(${LinkChatClickImg});` : `background-image: url(${LinkChatImg});`
    }}
    }
    &.post-link::before{
        ${({ isActive }) => {
        return isActive === 3 ? `background-image: url(${LinkIconEditClickImg});` : `background-image: url(${LinkIconEditImg});`
    }}
    }
    &.myprofile-link::before {
        ${({ isActive }) => {
        return isActive === 4 ? `background-image: url(${LinkProfileClickImg});` : `background-image: url(${LinkIconProfileImg});`
    }}
    }

    span {
        text-align: center;
    }
`

const TabMenu = () => {
    const [isactive, setIsActive] = useState(1);

    useEffect(() => {
        console.log(isactive)
    }, [isactive])

    return (
        <>
            <TabMenuRowList>
                <TabMenuItem>
                    <TabMenuLink className='home-link' to='/home' isactive={isactive} onClick={() => {
                        setIsActive(1);
                    }}>
                        <span>홈</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='chat-link' to='#' isactive={isactive} onClick={() => {
                        setIsActive(2);
                    }}>
                        <span>채팅</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='post-link' to='/post' isactive={isactive} onClick={() => {
                        setIsActive(3);
                    }}>
                        <span>게시물 작성</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='myprofile-link' to='/myprofile' isactive={isactive} onClick={() => {
                        setIsActive(4);
                    }}>
                        <span>프로필</span>
                    </TabMenuLink>
                </TabMenuItem>
            </TabMenuRowList>
            <BlankBox />
        </>
    );
};

export default TabMenu;

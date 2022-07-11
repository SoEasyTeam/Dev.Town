import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LinkHomeImg from '../../assets/icon/icon-home.svg';
import LinkChatImg from '../../assets/icon/icon-message-circle.svg';
import LinkIconProfileImg from '../../assets/icon/icon-user.svg';
import LinkIconEditImg from '../../assets/icon/icon-edit.svg';

const BlankBox = styled.div`
    width: 100vw;
    height: 60px;
`

const TabMenuRowBox = styled.div`
    width: 100vw;
    position: fixed;
    z-index: 10;
    bottom: 0;
    background-color: var(--bg-color);
    padding: 0 6px;
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid #dbdbdb;
`;

const TabMenuLink = styled(Link)`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    padding: 12px 30px 6px 30px;
    color: var(--subtitle-text);

    img {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
        margin-bottom: 4px;
    }
`;

const TabMenu = () => {
    return (
        <>
            <TabMenuRowBox>
                <TabMenuLink to='#'>
                    <img src={LinkHomeImg} alt='홈링크' />홈
                </TabMenuLink>
                <TabMenuLink to='#'>
                    <img src={LinkChatImg} alt='채팅링크' />
                    채팅
                </TabMenuLink>
                <TabMenuLink to='#'>
                    <img src={LinkIconEditImg} alt='게시물작성링크' />
                    게시물 작성
                </TabMenuLink>
                <TabMenuLink to='#'>
                    <img src={LinkIconProfileImg} alt='프로필링크' />
                    프로필
                </TabMenuLink>
            </TabMenuRowBox>
            <BlankBox/>
        </>
    );
};

export default TabMenu;

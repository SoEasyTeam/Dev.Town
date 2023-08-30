import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LinkHomeImg from '@public/assets/icon/icon-home.svg';
import LinkHomeClickImg from '@public/assets/images/icon-home-fill.png';
import LinkChatClickImg from '@public/assets/images/icon-message-circle-fill.png';
import LinkProfileClickImg from '@public/assets/images/icon-user-fill.png';
import LinkChatImg from '@public/assets/icon/icon-message-circle.svg';
import LinkIconProfileImg from '@public/assets/icon/icon-user.svg';
import LinkIconEditImg from '@public/assets/icon/icon-edit.svg';
import LinkIconEditClickImg from '@public/assets/images/icon-fill-post.png';

export const BlankBox = styled.div`
    width: 100vw;
    height: 60px;
`;

export const TabMenuRowList = styled.ul`
    width: 100vw;
    position: fixed;
    z-index: 10;
    bottom: 0;
    background-color: var(--bg-color);
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid #dbdbdb;
`;

export const TabMenuItem = styled.li``;

export const TabMenuLink = styled(NavLink)`
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
    &.home-link::before {
        background-image: url(${LinkHomeImg});
    }
    &.chat-link::before {
        background-image: url(${LinkChatImg});
    }
    &.post-link::before {
        background-image: url(${LinkIconEditImg});
    }
    &.myprofile-link::before {
        background-image: url(${LinkIconProfileImg});
    }

    &.active {
        &.home-link::before {
            background-image: url(${LinkHomeClickImg});
        }
        &.chat-link::before {
            background-image: url(${LinkChatClickImg});
        }
        &.post-link::before {
            background-image: url(${LinkIconEditClickImg});
        }
        &.myprofile-link::before {
            background-image: url(${LinkProfileClickImg});
        }
    }

    span {
        text-align: center;
    }
`;

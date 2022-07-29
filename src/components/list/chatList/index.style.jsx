import styled from "styled-components";
import { Link } from "react-router-dom";

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

export { ChatItemLink, ChatListBox }
import React from 'react';
import TabMenu from '../components/common/TabMenu';
import { TopBasicNav } from '../components/common/TopNav';
import ChatList from '../components/list/chatList';

function ChatPage() {
    return (
        <>
            <TopBasicNav />
            <ChatList/>
            <TabMenu />
        </>
    );
}

export default ChatPage;

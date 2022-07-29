import React from 'react';
import TabMenu from '../components/common/TabMenu';
import { TopBasicNav } from '../components/common/nav';
import ChatList from '../components/list/chatList';

function ChatPage() {
    return (
        <>
            <TopBasicNav />
            <ChatList />
            <TabMenu />
        </>
    );
}

export default ChatPage;
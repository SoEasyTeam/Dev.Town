import React from 'react';
import { BlankBox, TabMenuRowList, TabMenuItem, TabMenuLink } from './index.style'

const TabMenu = () => {
    return (
        <>
            <TabMenuRowList>
                <TabMenuItem>
                    <TabMenuLink className='home-link' to='/home'  >
                        <span>홈</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='chat-link' to='/chatlist' >
                        <span>채팅</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='post-link' to='/post' >
                        <span>게시물 작성</span>
                    </TabMenuLink>
                </TabMenuItem>
                <TabMenuItem>
                    <TabMenuLink className='myprofile-link' to='/myprofile' >
                        <span>프로필</span>
                    </TabMenuLink>
                </TabMenuItem>
            </TabMenuRowList>
            <BlankBox />
        </>
    );
};

export default TabMenu;

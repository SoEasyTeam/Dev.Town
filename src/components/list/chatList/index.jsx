import { ChatItemLink, ChatListBox } from './index.style'
import ProfileImg from '../../../assets/basic-profile-img.png'

function ChatList() {
    return (
        <ChatListBox>
            <ChatItemLink to = '#'>
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
            </ChatItemLink>
        </ChatListBox>
    );
}

export default ChatList
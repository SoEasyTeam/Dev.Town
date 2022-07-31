import { ChatItemLink, ChatListBox } from './index.style'
import ProfileImg from '../../../assets/basic-profile-img.png'

function ChatList() {
    return (
        <ChatListBox>
            <ChatItemLink to = '/chatroom'>
                <label>
                    <div className='login-box'></div>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                </label>
                <div className='ChatName-cont'>
                    <p className='ChatName-p'>리액트 면접 질문</p>
                    <p className='ChatRecentMessage-p'>
                        리액트의 라이프사이클은 크게 4가지로 설명할...
                    </p>
                </div>
                <p className='chatDate-p'>2020.10.25</p>
            </ChatItemLink>
            <ChatItemLink to = '/chatroom'>
                <label>
                    <div className='login-box'></div>
                    <img
                        className='profile-img'
                        src={ProfileImg}
                        alt='프로필 이미지'
                    />
                </label>
                <div className='ChatName-cont'>
                    <p className='ChatName-p'>리덕스 공부방</p>
                    <p className='ChatRecentMessage-p'>
                        React 프롭스 드릴링을 막기 위해 사용되는 리...
                    </p>
                </div>
                <p className='chatDate-p'>2020.10.26</p>
            </ChatItemLink>
        </ChatListBox>
    );
}

export default ChatList
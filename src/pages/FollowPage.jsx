import styled from 'styled-components';
import TabMenu from '../components/common/TabMenu'
import UserFollow from '../components/common/UserFollow'
import TopFollowNav from '../components/common/TopNav'

const FollowUl = styled.ul`
    margin: 24px 16px 0 16px;
    li {
        margin-bottom: 16px;
    }
`;

function FollowList() {
    return (
        <li>
            <UserFollow />
        </li>
    )
}

function FollowPage() {
    return (
        <>
            <TopFollowNav />
            <FollowUl>
                <h1 className='ir'>팔로워 리스트</h1>
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
                <FollowList />
            </FollowUl>
            <TabMenu />
        </>
    )
}
export default FollowPage;
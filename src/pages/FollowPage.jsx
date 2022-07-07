import styled from 'styled-components';
import TabMenu from '../components/common/TabMenu'
import UserFollow from '../components/common/UserFollow'
import { TopSearchNav } from '../components/common/TopNav'

const FollowMain = styled.section`
    /* min-height:712px; */
`

function FollowPage() {
    return (
        <>
            <TopSearchNav />
            <FollowMain>
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
                <UserFollow />
            </FollowMain>
            <TabMenu />
        </>
    )
}
export default FollowPage;
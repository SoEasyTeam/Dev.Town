import { NameIdBox, NickNameP, IdP, ProfileLogoImg } from '../../common/search/index.style';
import { UserFollowBox, FollowPageLink } from './index.style'
import { FollowSBtn } from '../../common/button/index'

function UserFollow({ src, name, accountname, isfollow }) {
    const token = sessionStorage.getItem('token');
    const changeFollow = async () => {
        if (isfollow) {
            await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`, {
                method: "delete",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            }).then((res) => {
                console.log(res);
                isfollow = false;
            });
        } else {
            await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`, {
                method: "post",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            }).then((res) => {
                console.log(res);
                isfollow = true;
            });
        }
    }

    return (
        <>
            <UserFollowBox>
                <FollowPageLink to={{ pathname: '/yourpage', search: `?id=${accountname}` }} >
                    <ProfileLogoImg src={src} alt='프로필로고' />
                    <NameIdBox>
                        <NickNameP>{name}</NickNameP>
                        <IdP>@ {accountname}</IdP>
                    </NameIdBox>
                </FollowPageLink>
                <FollowSBtn changeFollow={changeFollow} isFollowed={isfollow}></FollowSBtn>
            </UserFollowBox>
        </>
    );
}

export default UserFollow;
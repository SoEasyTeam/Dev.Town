import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

// dispatch로 보내준 token과 accountname을 파라미터로 불러온다. profile 함수 안에서 사용할 수 있게!!
function profile(token) {
    console.log('profile success action');
    // 잘불러져왔는지 콘솔로 찍어봄
    // console.log(accountname);
    return async (dispatch, getState) => {
        const authaccountname = sessionStorage.getItem('accountname');
        try {
            const res = await axios.get(
                API_URL + `/profile/${authaccountname}`,
                {
                    headers: {
                        // dispatch 받아온 token을 여기서 사용(명세서 확인)
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );

            // 잘 받와 왔나 res.data를 찍어본다.
            console.log(res.data);
            // 리듀서(서랍)에게 PROFILE_SUCCESS(타입) 칸에서 payload의 옵션들을 요청한다.(아래 옵션을 읽어보기 profileReducer 리듀서로 이동)
            dispatch({
                type: 'PROFILE_SUCCESS',
                payload: {
                    // 왼쪽에 id는 우리가 임의로 지정한 값
                    // 오른쪽은 명세서에 지정된 값
                    id: res.data.profile._id,
                    username: res.data.profile.username,
                    accountname: res.data.profile.accountname,
                    intro: res.data.profile.intro,
                    image: res.data.profile.image,
                    isfollow: res.data.profile.isfollow,
                    following: res.data.profile.following,
                    follower: res.data.profile.follower,
                    followerCount: res.data.profile.followerCount,
                    followingCount: res.data.profile.followingCount,
                },
            });
            // 에러가 나면 catch의 값을 불러온다.
        } catch (error) {}
    };
}

function profileModification(name, image, accountname, intro) {
    console.log('profileModification success action');
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const profileModificationData = {
            user: {
                username: name,
                accountname: accountname,
                intro: intro,
                image: image,
            },
        };
        try {
            const profileModificationRes = await axios.put(
                API_URL + '/user',
                profileModificationData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            if (
                profileModificationRes.data.message ===
                '이미 사용중인 계정 ID입니다.'
            ) {
                alert('이미 사용중인 계정 ID입니다.');
            }
            dispatch({
                type: 'PROFILE_SUCCESS',
                payload: {
                    id: profileModificationRes.data.profile._id,
                    username: profileModificationRes.data.profile.username,
                    accountname:
                        profileModificationRes.data.profile.accountname,
                    intro: profileModificationRes.data.profile.intro,
                    image: profileModificationRes.data.profile.image,
                    isfollow: profileModificationRes.data.profile.isfollow,
                    following: profileModificationRes.data.profile.following,
                    follower: profileModificationRes.data.profile.follower,
                    followerCount:
                        profileModificationRes.data.profile.followerCount,
                    followingCount:
                        profileModificationRes.data.profile.followingCount,
                },
            });
        } catch (error) {}
    };
}

function profileModificationModal(userData) {
    console.log('productModificationModal success action');
    return async (dispatch, getState) => {
        dispatch({
            type: 'PROFILE_MODAL_SUCCESS',
            payload: {
                userData: userData,
            },
        });
    };
}

export const profileAction = {
    profile,
    profileModification,
    profileModificationModal,
};

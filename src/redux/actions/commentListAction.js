function commentList(postId, token){
    console.log(postId);
    return async (dispatch, getState)=>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post/${postId}/comments`
        try {
            let res = await fetch(url+reqPath,{
                method:'GET',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
        })
        const resJson=await res.json()
        console.log(resJson,'oook?');
        dispatch({
            type: 'GET_COMMENTLIST',
            payload:{
                    id: resJson.commentList.id,
                    content: resJson.commentList.content,
                    createdAt: resJson.commentList.createdAt,
                    author: {
                        _id: resJson.commentList._id,
                        username: resJson.commnetList.username,
                        accountname: resJson.commentList.accountname,
                        intro: resJson.commentList.intro,
                        image: resJson.commentList.image,
                        following: resJson.commentList.following,
                        follower: resJson.commentList.follower,
                        followerCount: resJson.commentList.followerCount,
                        followingCount: resJson.commentList.followingCount
                    }
                
            },
            
        })
    } catch (error) {
        console.log('something wrong!!!');
    }
}
}

export const commentListAction = {commentList}
function commentList(post_id, token){
    return async (dispatch, getState)=>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post/${post_id}/comments`
        try {
            let res = await fetch(url+reqPath,{
                method:'GET',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
        })
        const resJson=await res.json()
        dispatch({
            type: 'GET_COMMENTLIST',
            payload:{
                "comment": {
                    "id": resJson.comment.id,
                    "content": resJson.comment.content,
                    "createdAt": resJson.comment.createdAt,
                    "author": {
                        "_id": resJson.comment._id,
                        "username": resJson.commnet.username,
                        "accountname": resJson.comment.accountname,
                        "intro": resJson.comment.intro,
                        "image": resJson.comment.image,
                        "following": [],
                        "follower": [],
                        "followerCount": resJson.comment.followerCount,
                        "followingCount": resJson.comment.followingCount
                    }
                }
            },
            
        })
    } catch (error) {
        console.log(error);
    }
}
}

export const CommentListAction = {commentList}
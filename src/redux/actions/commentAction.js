function postComment(post_id, token, content){
    console.log('comment action success');
    return async (dispatch, getState)=>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post/${post_id}/comments`
        try {
            let res = await fetch(url+reqPath,{
                method:'POST',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(
                    {
                        "comment":{
                            "content":`${content}`
                        }
                    }
                )
            })
            const resJson=await res.json()
            dispatch({
                type: 'POST_COMMENT',
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
                // {
                //     type: 'DELETE_COMMENT',
                //     payload: 
                // }
                
            })
        } catch (error) {
            console.log('에러 발생')
        }
    }
}

export const CommentAction = {postComment}
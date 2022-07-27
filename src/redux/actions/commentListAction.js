function commentList(postId, token){
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
        dispatch({
            type: 'GET_COMMENTLIST',
            payload:{
                    comments: resJson.comments
            },
            
        })
    } catch (error) {
        console.log('something wrong!!!');
    }
}
}

function writeComment(postId, token, comment){
    console.log(postId, token, comment);
    return async(dispatch)=>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post/${postId}/comments`
        try {
            let res = await fetch(url+reqPath,{
                method:'POST',
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
                body:JSON.stringify({
                    "comment":{
                        "content":comment
                }})
            })
            const resJson=await res.json()
            console.log(resJson,'댓글제발');
            dispatch({
                type:'WRITE_COMMENT',
                payload:{

                }
            })
        } catch {

        }
    }
}
export const commentListAction = {commentList, writeComment}
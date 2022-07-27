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
                    comments: resJson.comments
            },
            
        })
    } catch (error) {
        console.log('something wrong!!!');
    }
}
}

export const commentListAction = {commentList}
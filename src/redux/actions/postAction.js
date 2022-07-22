function post(token, uploadedImg, postText){
    return async (dispatch, getState) =>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/post`
        try{
            let res = await fetch(url+reqPath,{
                method: 'POST',
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type" : "application/json",
                },
                body:JSON.stringify({
                    "post": {
                        "content": postText,
                        "image": uploadedImg,
                    },
                })
            })
            const resJson = await res.json()
            console.log(resJson);
            dispatch({
                type: 'POST_SUCCESS',
                payload:{
                    // _id: resJson.post._id,
                    // username: resJson.post.username,
                    // accountname: resJson.post.accountname,
                    // image: resJson.post.image,
                    // content:resJson.post.content
                    item: resJson.post
                }
            })
    } catch (error) {
        console.log(error)
    }
}
}
export const postAction = { post }
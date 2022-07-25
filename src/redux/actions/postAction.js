function post(formData,postText){
    console.log(formData, '디스패치 성공!');
    return async (dispatch, getState) =>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = "/image/uploadfiles"
        const token = getState().auth.token;
        try{
            let fileRes = await fetch(url+reqPath,{
                method: 'POST',
                body: formData
            })
            const fileJson = await fileRes.json()
            console.log(fileJson);
            const imageUrls = fileJson.map((fileData)=>url+'/'+fileData.filename).join(',')
            const postReq = '/post'
            let postRes = await fetch(url+postReq,{
                method:'POST',
                header:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(
                    {
                        "post": {
                                    "content": postText,
                                    "image": imageUrls
                            }
                    }
                )
            })
            const postJson = await postRes.json()
            console.log(postJson);
            dispatch({
                type: 'POST_SUCCESS',
                payload:{
                    
                    // _id: resJson.post._id,
                    // username: resJson.post.username,
                    // accountname: resJson.post.accountname,
                    // image: resJson.post.image,
                    // content:resJson.post.content
                    // item: resJson.post
                }
            })
    } catch (error) {
        console.log(error)
    }
}
}
export const postAction = { post }
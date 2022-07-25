function post(token, uploadedImg, formData){
    return async (dispatch, getState) =>{
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = "/image/uploadfiles"
        try{
            let fileRes = await fetch(url+reqPath,{
                method: 'POST',
                body: formData
            })
            const fileJson = await fileRes.json()
            console.log(fileJson);
            // for (let i of fileJson) {
            //     name.push(i['filename'])
            // }
            // if (name.length>1){
            //     return name.join(',')
            // } else {
            //     return name[0]
            // }
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
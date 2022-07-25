// function upload(token, formData){
//     return async (dispatch, getState) =>{
//         let url = 'https://mandarin.api.weniv.co.kr';
//         const reqPath = `/image/uploadfiles`
//         try {
//             let res = await fetch(url+reqPath,{
//                 method:'POST',
//                 body: formData
//             })
//             const resJson = await res.json()
//             const postImgName = resJson['filename']
//             dispatch({
//                 type:'FILE_UPLOAD_SUCCESS',
//                 payload:{
//                     files: postImgName
//                 }
//             })
//         } catch(error){
//             console.log(error);
//         }
//     }
// }

// export const uploadFilesAction = {upload}
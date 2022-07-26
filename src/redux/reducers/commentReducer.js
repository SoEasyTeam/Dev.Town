// let initialState = {
//     "comment": {
//         "id": '',
//         "content": '',
//         "createdAt": '',
//         "author": {
//             "_id": '',
//             "username": '',
//             "accountname": '',
//             "intro": '',
//             "image": '',
//             "following": [],
//             "follower": [],
//             "followerCount": '',
//             "followingCount": ''
//         }
//     }
// }

// function commentReducer(state=initialState, action){
//     let { type, payload } = action
//     switch(type){
//         case 'POST_COMMENT':
//         return {
//             ...state,
//             "comment": {
//                 "id": payload.id,
//                 "content": payload.content,
//                 "createdAt": payload.createdAt,
//                 "author": {
//                     "_id": payload._id,
//                     "username": payload.username,
//                     "accountname": payload.accountname,
//                     "intro": payload.intro,
//                     "image": payload.image,
//                     "following": payload.following,
//                     "follower": payload.follower,
//                     "followerCount": payload.followerCount,
//                     "followingCount": payload.followingCount
//                 }
//             }

//         }
//         default:
//             return{
//                 ...state
//             }
//     }
// }

// export default commentReducer
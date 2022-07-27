let initialState = {
    'comments':''
}

let initialCommentWriteState = {
    comment:''
}
function commentListReducer(state=initialState, action){
    let { type, payload } = action
    switch(type){
        case 'GET_COMMENTLIST':
        return {
            ...state,
                comments:payload.comments
            }
        default:
            return{
                ...state
            }
    }
}

function writeCommentReducer(state = initialCommentWriteState, action){
    let {type, payload}=action
    switch(type){
        case 'WRITE_COMMENT':
            return{
                ...state, 
                comment:payload.comment
            }
        default:
            return {...state}
    }
}
export {commentListReducer, writeCommentReducer}
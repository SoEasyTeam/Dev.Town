let initialState={
    userList:[]
}

function searchReducer(state=initialState, action){
    let {type, payload} = action
    switch (type) {
        case 'SEARCH_USER':
            return {
                ...state,

            }
        default:
            return {...state}
    }
}

export default searchReducer
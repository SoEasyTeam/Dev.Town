let initialState = {
    id: '',
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
    author: '',
};

function addProductReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'ADDPRODUCT_SUCCESS':
            return {
                ...state,
                id: payload.id,
                itemName: payload.itemName,
                price: payload.price,
                link: payload.link,
                itemImage: payload.itemImage,
                author: payload.author,
            };
        default:
            return {
                ...state,
            };
    }
}

export default addProductReducer;
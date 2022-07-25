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
    console.log(action);
    switch (type) {
        case 'ADDPRODUCT_SUCCESS':
            return {
                ...state,
                product_id: payload.id,
                itemName: payload.itemName,
                price: payload.price,
                link: payload.link,
                itemImage: payload.itemImage,
                author: payload.author,
            };
        case 'PRODUCTMODIFICATION_SUCCESS':
            return {
                ...state,
                product_id: payload.id,
                itemName: payload.itemName,
                price: payload.price,
                link: payload.link,
                itemImage: payload.itemImage,
                author: payload.author,
            };
        case 'PRODUCT_MODIFICATION_MODAL':
            return {
                ...state,
                product_id: payload.id,
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

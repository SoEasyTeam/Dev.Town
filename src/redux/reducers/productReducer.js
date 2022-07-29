let initialState = {
    id: '',
    itemName: '',
    price: '',
    link: '',
    itemImage: '',
    author: '',
};

function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'PRODUCT_SUCCESS':
            return {
                ...state,
                product_id: payload.id,
                itemName: payload.itemName,
                price: payload.price,
                link: payload.link,
                itemImage: payload.itemImage,
                author: payload.author,
            };
        case 'PRODUCT_LIST_SUCCESS':
            return {
                products: payload.products,
            };
        default:
            return {
                ...state,
            };
    }
}

export default productReducer;

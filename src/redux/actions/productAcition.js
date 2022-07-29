function addProduct(itemName, price, link, itemImage) {
    console.log('addProduct success action');
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/product';
        const token = getState().auth.token;
        console.log(token);
        try {
            let res = await fetch(url + reqPath, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    product: {
                        itemName: itemName,
                        price: parseInt(price),
                        link: link,
                        itemImage: itemImage,
                    },
                }),
            });

            const resJson = await res.json();
            console.log(resJson);

            if (resJson.message === 'request entity too large') {
                alert('이미지 용량이 큽니다. 10MB 이하로 해주세요.');
            } else {
                dispatch({
                    type: 'PRODUCT_SUCCESS',
                    payload: {
                        id: resJson.product.id,
                        itemName: resJson.product.itemName,
                        price: resJson.product.price,
                        link: resJson.product.link,
                        itemImage: resJson.product.itemImage,
                        author: resJson.product.author,
                    },
                });
            }
        } catch (error) {}
    };
}

function productModificationModal(
    itemName,
    price,
    link,
    itemImage,
    product_id,
    author
) {
    console.log('productModificationModal success action');
    console.log(product_id);
    return async (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_SUCCESS',
            payload: {
                id: product_id,
                itemName: itemName,
                price: price,
                link: link,
                itemImage: itemImage,
                author: author,
            },
        });
    };
}

function productModification(itemName, price, link, itemImage, product_id) {
    console.log('productModification success action');
    console.log(product_id);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/product/${product_id}`;
        const token = getState().auth.token;
        console.log(token);
        try {
            let res = await fetch(url + reqPath, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    product: {
                        itemName: itemName,
                        price: parseInt(price),
                        link: link,
                        itemImage: itemImage,
                    },
                }),
            });

            const resJson = await res.json();
            console.log(resJson);

            dispatch({
                type: 'PRODUCT_SUCCESS',
                payload: {
                    id: resJson.product.id,
                    itemName: resJson.product.itemName,
                    price: resJson.product.price,
                    link: resJson.product.link,
                    itemImage: resJson.product.itemImage,
                    author: resJson.product.author,
                },
            });
        } catch (error) {}
    };
}

function productDelete(product_id) {
    console.log('productDelete success action');
    console.log(product_id);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/product/${product_id}`;
        const token = getState().auth.token;
        console.log(token);
        try {
            let res = await fetch(url + reqPath, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            const resJson = await res.json();
            console.log(resJson);
        } catch (error) {}
    };
}

function productList(token, accountname) {
    return async (dispatch, getState) => {
        console.log('action 성공');

        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = `/product/${accountname}`;
        try {
            let res = await fetch(url + reqPath, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            const resJson = await res.json();
            console.log(resJson);

            dispatch({
                type: 'PRODUCT_LIST_SUCCESS',
                payload: {
                    products: resJson,
                },
            });
        } catch (error) {}
    };
}

export const productAction = {
    addProduct,
    productModification,
    productModificationModal,
    productDelete,
    productList,
};

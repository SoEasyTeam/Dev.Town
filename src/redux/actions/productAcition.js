import axios from 'axios';
import { API_URL } from '../../constants/defaultUrl';

function addProduct(itemName, price, link, itemImage) {
    console.log('addProduct success action');
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const addProductData = {
            product: {
                itemName: itemName,
                price: parseInt(price),
                link: link,
                itemImage: itemImage,
            },
        };
        try {
            const res = await axios.post(API_URL + '/product', addProductData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            });

            if (res.data.message === 'request entity too large') {
                alert('이미지 용량이 큽니다. 10MB 이하로 해주세요.');
            } else {
                dispatch({
                    type: 'PRODUCT_SUCCESS',
                    payload: {
                        id: res.data.product.id,
                        itemName: res.data.product.itemName,
                        price: res.data.product.price,
                        link: res.data.product.link,
                        itemImage: res.data.product.itemImage,
                        author: res.data.product.author,
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
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
            const productModificationData = {
                product: {
                    itemName: itemName,
                    price: parseInt(price),
                    link: link,
                    itemImage: itemImage,
                },
            };

            const productModificationRes = await axios.put(
                API_URL + `/product/${product_id}`,
                productModificationData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );

            dispatch({
                type: 'PRODUCT_SUCCESS',
                payload: {
                    id: productModificationRes.data.product.id,
                    itemName: productModificationRes.data.product.itemName,
                    price: productModificationRes.data.product.price,
                    link: productModificationRes.data.product.link,
                    itemImage: productModificationRes.data.product.itemImage,
                    author: productModificationRes.data.product.author,
                },
            });
        } catch (error) {}
    };
}

function productDelete(product_id) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        console.log(token);
        try {
            const productDeleteRes = await axios.delete(
                API_URL + `/product/${product_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                }
            );

            console.log(productDeleteRes.data);
        } catch (error) {}
    };
}

function productList(productaccountname) {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const accountname = getState().auth.accountname;
        console.log(accountname);
        console.log(productaccountname);
        if (productaccountname !== undefined) {
            try {
                const productListRes = await axios.get(
                    API_URL + `/product/${productaccountname}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json',
                        },
                    }
                );
                dispatch({
                    type: 'PRODUCT_LIST_SUCCESS',
                    payload: {
                        item: productListRes.data,
                    },
                });
            } catch (error) {}
        } else {
            try {
                const productListRes = await axios.get(
                    API_URL + `/product/${accountname}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-type': 'application/json',
                        },
                    }
                );
                dispatch({
                    type: 'PRODUCT_LIST_SUCCESS',
                    payload: {
                        item: productListRes.data,
                    },
                });
            } catch (error) {}
        }
    };
}

export const productAction = {
    addProduct,
    productModification,
    productModificationModal,
    productDelete,
    productList,
};

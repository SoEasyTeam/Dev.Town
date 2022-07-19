function addProduct(itemName, price, link, token, itemImage) {
    console.log('addProduct success action');
    console.log(itemName);
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/product';
        console.log(itemImage);
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
            dispatch({
                type: 'ADDPRODUCT_SUCCESS',
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

export const addProductAction = { addProduct };

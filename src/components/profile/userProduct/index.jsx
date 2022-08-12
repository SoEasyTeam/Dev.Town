import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../common/product';
import { AlertProductModal } from '../../common/alert';
import { ProductAreaListUl, ProductArea } from './index.style'
import { productAction } from '../../../redux/actions/productAcition';

function UserProduct() {
    const [alertOn, setAlertOn] = useState(false);
    const dispatch = useDispatch();
    const productListItem = useSelector(state=>state.product.item);

    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect');
            dispatch(productAction.productList());
        }, 300);
    }, [dispatch])

    function alertOnModal() {
        setAlertOn(true);
    }

    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    return (
        <>
            {
                productListItem===undefined||productListItem.data === 0 ? <></> :
                <ProductArea>
                    <div className='productAreaDiv'>
                        <h3 className='productAreaTitle'>판매 중인 상품</h3>
                        <ProductAreaListUl>
                            {productListItem &&
                                productListItem.product.map((item) => {
                                return (
                                    <div key={item.id} >
                                        <Product
                                            name={item.itemName}
                                            price={item.price}
                                            src={item.itemImage}
                                            itemLink={item.link}
                                            writerId={item.author._id}
                                            alertOnModal={alertOnModal}
                                            product_id={item.id}
                                            author={item.author}
                                        />
                                    </div>
                                    )
                                })
                            }
                        </ProductAreaListUl>
                    </div>
                </ProductArea>
            }
            {alertOn === true ? <AlertProductModal alertOffModal={alertOffModal} /> : ''}
        </>
    )

}

export default UserProduct;
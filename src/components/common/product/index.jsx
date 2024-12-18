import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '@redux/actions/productAcition';
import { MyProductModal } from '@components/common/modal';
import { ProductItemBox } from '@components/common/product/index.style';

const Product = ({
    name,
    price,
    src,
    itemLink,
    writerId,
    alertOnModal,
    product_id,
    author,
}) => {
    const userId = useSelector((state) => state.auth.id);
    const [modalOn, setModalOn] = useState(false);
    const priceShow = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const dispatch = useDispatch();
    function openModal() {
        if (userId !== writerId) {
            setModalOn(false);
            window.open(itemLink, '_blank');
        } else {
            setModalOn(true);
        }
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        setModalOn(false);
        dispatch(productAction.productList());
    }

    return (
        <>
            <ProductItemBox onClick={openModal}>
                <img className='img-product' src={src} alt='상품이미지' />
                <p className='txt-productName'>{name}</p>
                <span className='txt-productPrice'>{priceShow}원</span>
            </ProductItemBox>
            {modalOn === true ? (
                <MyProductModal
                    itemName={name}
                    src={src}
                    price={price}
                    itemImage={src}
                    product_id={product_id}
                    closeModal={closeModal}
                    link={itemLink}
                    alertOnModal={alertOnModal}
                    author={author}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default Product;

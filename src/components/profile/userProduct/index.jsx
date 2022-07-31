import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from '../../common/product';
import { AlertProductModal } from '../../common/alert';
import { ProductAreaListUl, ProductArea } from './index.style'

const ProductAreaList = ({ userProductData, alertOnModal }) => {

    return (
        <>
            {userProductData &&
                userProductData.product.map((item) => {
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
        </>
    )
}

function UserProduct(props) {
    const token = sessionStorage.getItem('token');
    const accountname = sessionStorage.getItem('accountname');
    const [userProductData, setUserProductData] = useState('');
    const [alertOn, setAlertOn] = useState(false);

    const getData = async (account) => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/product/${account}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        // console.log('상품 : ', json)
        setUserProductData(json)
    }

    useEffect(() => {
        if (props.accountname) {
            getData(props.accountname)
        }
        else {
            getData(accountname)
        }
    }, [])

    if (userProductData.data === 0) {
        return <></>
    }

    function alertOnModal() {
        setAlertOn(true);
    }

    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }
    return (
        <>
            <ProductArea>
                <div className='productAreaDiv'>
                    <h3 className='productAreaTitle'>판매 중인 상품</h3>
                    <ProductAreaListUl>
                        <ProductAreaList userProductData={userProductData} alertOnModal={alertOnModal} />
                    </ProductAreaListUl>
                </div>
            </ProductArea>
            {alertOn === true ? <AlertProductModal alertOffModal={alertOffModal} /> : ''}
        </>
    )

}

export default UserProduct;
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from '../components/common/Product';
import { useSelector } from 'react-redux';

const ProductLink = styled(Link)`

`

const ProductAreaListUl = styled.ul`
    list-style: none;
    margin-left: 16px;
    height: 152px;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    li {
        float:left;
        margin-right: 16px;
        margin-bottom: 19.5px;
    }
`

const ProductArea = styled.article`
    width: 100vw;
    border-bottom: 0.5px solid #DBDBDB;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .productAreaDiv {
        max-width: 640px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .productAreaTitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin: 19.5px 0 16px 16px;
    }
`

const ProductAreaList = ({ userProductData }) => {
    return (
        <>
            {userProductData &&
                userProductData.product.map((item) => {
                    return (
                        <ProductLink to={item.link} key={item.id}>
                            <Product
                                name={item.itemName}
                                price={item.price}
                                src={item.itemImage}
                            />
                        </ProductLink>
                    )
                })
            }
        </>
    )
}

function UserProduct() {
    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);
    const [userProductData, setUserProductData] = useState('')

    const getData = async () => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/product/${accountname}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        setUserProductData(json)
    }

    useEffect(() => {
        getData()
    }, [])

    if (!userProductData) {
        return <></>
    }

    return (
        <>
            <ProductArea>
                <div className='productAreaDiv'>
                    <h3 className='productAreaTitle'>판매 중인 상품</h3>
                    <ProductAreaListUl>
                        <ProductAreaList userProductData={userProductData} />
                    </ProductAreaListUl>
                </div>
            </ProductArea>
        </>
    )

}



export default UserProduct;




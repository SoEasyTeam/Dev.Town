import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from '../components/common/Product';
import { useSelector } from 'react-redux';
import { MyProductModal } from './Modal';

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
        cursor: pointer;
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

const ProductAreaList = ({ userProductData, openModal }) => {
    // const link = isMine ? <Modal/> : item.link;

    return (
        <>
            {userProductData &&
                userProductData.product.map((item) => {
                    return (
                        <div key={item.id} onClick={openModal}>
                            {/* <div key={item.id} onClick={() => setModalOn(true)}> */}
                            <Product
                                name={item.itemName}
                                price={item.price}
                                src={item.itemImage}
                            />
                        </div>
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
    // 모달창
    const [modalOn, setModalOn] = useState(false);
    function openModal() {
        setModalOn(true);
    }
    function closeModal() {
        setModalOn(false);
    }
    // const onOpenModal = () => {
    //     setModalOn(!modalOn);
    // }


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
                        <ProductAreaList openModal={openModal} closeModal={closeModal} userProductData={userProductData} />
                    </ProductAreaListUl>
                </div>
            </ProductArea>
            {modalOn === true ? <MyProductModal openModal={openModal} closeModal={closeModal} /> : ''}
        </>
    )

}



export default UserProduct;




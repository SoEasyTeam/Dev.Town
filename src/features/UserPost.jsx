import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeImgPost from '../components/common/HomeImgPost';
import IconPostListOn from '../assets/icon/icon-post-list-on.png';
import IconPostAlbumOff from '../assets/icon/icon-post-album-off.png';


const PostLink = styled(Link)`

`

const PostShowBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
`

const PostArea = styled.article`
    width: 100vw;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    .postBtnImg {
        width: 26px;
    }
    .postAreaTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-bottom: 0.5px solid #DBDBDB;
        height: 43px
    }
`
const PostAreaListUl = styled.ul`
    list-style: none;
    li {
        margin: 16px 0;
    }
`
function PostAreaList() {
    return (
        <li>
            <PostLink to="#">
                <HomeImgPost />
            </PostLink>
        </li>
    )
}

const ProductAreaList = ({ userProductData }) => {
    return (
        <>
            {userProductData &&
                userProductData.product.map((item) => {
                    return (
                        <ProductLink to={item.link}>
                            <Product
                                key={item.id}
                                name={item.itemName}
                                price={item.price}
                                src={item.itemImg}
                            />
                        </ProductLink>
                    )
                })
            }
        </>
    )
}

function UserPost() {
    const [userPostData, setUserPostData] = useState('')
    console.log(userPostData)
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://mandarin.api.weniv.co.kr/post/dev_town/userpost", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2MwZTMzODJmZGNjNzEyZjQzYTQ3OCIsImV4cCI6MTY2Mjk0OTQxMCwiaWF0IjoxNjU3NzY1NDEwfQ.Z8_J_6Sol0yPyNgzbOrlJCiwuo4num9dqBY1PsgwtVk",
                    "Content-type": "application/json"
                }
            })
            const json = await res.json()
            // console.log(json)
            setUserPostData(json)
        }
        getData()
    }, [])

    if (!userPostData) {
        return <></>
    }

    return (
        <>
            <PostArea>
                <div className='postAreaTop'>
                    <PostShowBtns>
                        <img className='postBtnImg' src={IconPostListOn} alt='포스트리스트형식' />
                    </PostShowBtns>
                    <PostShowBtns>
                        <img className='postBtnImg' src={IconPostAlbumOff} alt='포스트앨범형식' />
                    </PostShowBtns>
                </div>
                <PostAreaListUl>
                    <PostAreaList userPostData={userPostData} />
                </PostAreaListUl>
            </PostArea>
            {/* <ProductArea>
                <div className='productAreaDiv'>
                    <h3 className='productAreaTitle'>판매 중인 상품</h3>
                    <ProductAreaListUl>
                        <ProductAreaList userProductData={userProductData} />
                    </ProductAreaListUl>
                </div>
            </ProductArea> */}
        </>
    )

}



export default UserPost;




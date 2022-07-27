import { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeImgPost from '../common/HomeImgPost';
import IconPostListOn from '../../assets/icon/icon-post-list-on.png';
import IconPostListOff from '../../assets/icon/icon-post-list-off.png';
import IconPostAlbumOff from '../../assets/icon/icon-post-album-off.png';
import IconPostAlbumOn from '../../assets/icon/icon-post-album-on.png';
import { useSelector } from 'react-redux';
import { AlertPostModal, AlertDeclareModal } from '../common/AlertModal';

const PostListBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px;
    background-image: url(${IconPostListOn});
    ${({ isActive }) =>
        isActive &&
        `
            background-image: url(${IconPostListOff});
        `};
`

const PostAlbumBtns = styled.button`
    width: 26px;
    height: 26px;
    margin-right: 16px; 
    background-image: url(${IconPostAlbumOff});
    ${({ isActive }) =>
        isActive &&
        `
            background-image: url(${IconPostAlbumOn});
        `};
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
        margin: 20px 0;
    }
`

function parseDate(dateString) {
    const postDate = new Date(dateString)
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day]
}

function PostAreaList({ userPostData, alertOnModal }) {
    return (
        <>
            {userPostData &&
                userPostData.post.map((item) => {
                    const [year, month, day] = parseDate(item.createdAt);
                    // console.log(item.image)
                    return (
                        <li key={item.id}>
                            <HomeImgPost
                                profileimg={item.author.image}
                                nickname={item.author.username}
                                id={item.author.accountname}
                                postparagraph={item.content}
                                postsrc={item.image}
                                heartCount={item.heartCount}
                                commentCount={item.commentCount}
                                year={year}
                                month={month}
                                day={day}
                                alertOnModal={alertOnModal}
                            />
                        </li>
                    )
                })
            }
        </>
    )
}

function UserPost(id) {
    const token = useSelector(state => state.auth.token);
    const accountname = useSelector(state => state.auth.accountname);
    const [userPostData, setUserPostData] = useState('')
    const [alertOn, setAlertOn] = useState(false);

    const getData = async () => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${accountname}/userpost`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const json = await res.json()
        // console.log('게시물 : ', json)
        setUserPostData(json)
    }
    useEffect(() => {
        getData()
    }, [])

    if (Array.isArray(userPostData.post) && userPostData.post.length === 0) {
        return <></>
    }
    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    function changeActive() {

    }
    return (
        <>
            <PostArea>
                <div className='postAreaTop'>
                    <PostListBtns onClick={changeActive} />
                    <PostAlbumBtns onClick={changeActive} />
                </div>
                <PostAreaListUl>
                    <PostAreaList userPostData={userPostData} alertOnModal={alertOnModal} />
                </PostAreaListUl>
            </PostArea>
            {alertOn === true && id !== accountname ? <AlertPostModal alertOffModal={alertOffModal} /> : ''}
            {alertOn === true && id === accountname ? <AlertDeclareModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default UserPost;




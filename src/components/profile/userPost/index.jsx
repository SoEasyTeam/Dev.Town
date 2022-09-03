import { React, useState, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import HomeImgPost from '../../common/HomeImgPost';
import { AlertPostModal, AlertDeclareModal } from '../../common/alert';
import { PostListBtns, PostAlbumBtns, PostArea, PostAreaListUl } from './index.style';

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
                    // console.log('post item', item)
                    return (
                        <li key={item.id}>
                            <HomeImgPost
                                profileimg={item.author.image}
                                nickname={item.author.username}
                                id={item.author.accountname}
                                postparagraph={item.content}
                                postsrc={item.image}
                                heartCount={item.heartCount}
                                hearted={item.hearted}
                                commentCount={item.commentCount}
                                year={year}
                                month={month}
                                day={day}
                                postId={item.id}
                                alertOnModal={alertOnModal}
                                userPostData={userPostData}
                            />
                        </li>
                    )
                })
            }
        </>
    )
}

function PostAlbumAreaList({ userPostData }) {
    return (
        <>
            {userPostData &&
                userPostData.post.map((item) => {
                    console.log('post item image', item.image)
                    if (item.image.includes('https')) {
                        return (
                            <li key={item.id}>
                                <img src={item.image} alt='게시글상품사진' />
                            </li>
                        )
                    } else
                        return (
                            <></>
                        )
                })
            }
        </>
    )
}

function UserPost(props) {
    const token = sessionStorage.getItem('token');
    const accountname = sessionStorage.getItem('accountname');
    const [userPostData, setUserPostData] = useState('')
    const [alertOn, setAlertOn] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const location = useLocation();

    // console.log('버튼', isActive)
    const getData = async (account) => {
        const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${account}/userpost`, {
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
        if (props.accountname) {
            getData(props.accountname)
        }
        else {
            getData(accountname)
        }
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
    function changeListActive() {
        console.log('버튼바뀜', isActive)
        setIsActive(true)
        console.log('userPostData', userPostData)
    }
    function changeAlbumActive() {
        console.log('버튼바뀜', isActive)
        setIsActive(false)
        console.log('userPostData', userPostData)
    }
    return (
        <>
            <PostArea>
                <div className='postAreaTop'>
                    <PostListBtns onClick={changeListActive} isActive={isActive} />
                    <PostAlbumBtns onClick={changeAlbumActive} isActive={isActive} />
                </div>
                <PostAreaListUl>
                    {isActive ? (
                        <>
                            <PostAreaList userPostData={userPostData} alertOnModal={alertOnModal} />
                        </>
                    ) : (
                        <>
                            {/* {PostAlbumAreaList(userPostData)} */}
                            바꾸기 성공!
                        </>
                    )}

                </PostAreaListUl>
            </PostArea>
            {alertOn === true && location.pathname.split("/")[1] === "myprofile" ? <AlertPostModal alertOffModal={alertOffModal} /> : ''}
            {alertOn === true && location.pathname.split("/")[1] === "yourpage" ? <AlertDeclareModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default UserPost;






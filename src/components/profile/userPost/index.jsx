import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const [isActive, setIsActive] = useState(true);
    // console.log('버튼', isActive)
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
        console.log('버튼바뀜', isActive)
        setIsActive(!isActive)
    }
    return (
        <>
            <PostArea>
                <div className='postAreaTop'>
                    <PostListBtns onClick={changeActive} isActive={isActive} />
                    <PostAlbumBtns onClick={changeActive} isActive={isActive} />
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



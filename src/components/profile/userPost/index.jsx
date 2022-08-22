import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../../redux/actions/postAction';
import { useLocation, useParams } from 'react-router-dom';
import HomeImgPost from '../../common/HomeImgPost';
import { AlertPostModal, AlertDeclareModal } from '../../common/alert';
import { PostListBtns, PostAlbumBtns, PostArea, PostAreaListUl } from './index.style';
import parseDate from '../../../utils/parseDate';

function PostAreaList({ userPostData, alertOnModal }) {
    return (
        <>
            {userPostData &&
                userPostData.map((item) => {
                    const [year, month, day] = parseDate(item.createdAt);
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
                                postId = {item.id}
                                alertOnModal={alertOnModal}
                            />
                        </li>
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
    const myPosts = useSelector(state=>state.getMyPost.post)
    console.log(myPosts);
    const dispatch = useDispatch()

    useEffect(()=>{
        setUserPostData(myPosts)
        if (props.accountname){
            dispatch(postAction.getMyPost(props.accountname))
        } else {
            dispatch(postAction.getMyPost(accountname))
        }
    },[dispatch, props.accountname, accountname, myPosts])

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
            {alertOn === true && location.pathname.split("/")[1] === "myprofile" ? <AlertPostModal alertOffModal={alertOffModal} /> : ''}
            {alertOn === true && location.pathname.split("/")[1] === "yourpage" ? <AlertDeclareModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default UserPost;




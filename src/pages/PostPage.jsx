import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { TopBasicNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import CommentInputBox from '../components/comment/CommentInput'
import CommentList from '../components/comment/CommentList'
import { AlertLogoutModal } from '../components/common/AlertModal'
import { commentListAction } from '../redux/actions/commentListAction'
import { postAction } from '../redux/actions/postAction';

function PostPage() {
    const dispatch = useDispatch()

    //post 고유 아이디 가져오기
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    console.log(postViewId);
    console.log(id);
    const postId = postViewId.filter(i => i === id);
    console.log(postId);
    // const post = useSelector(state=>state.getPost.post)

    //댓글 가져오기
    const commentList = useSelector(state=>state.commentList.comment)
    const token = useSelector(state=>state.auth.token)
    
    // alert 모달창
    const [alertOn, setAlertOn] = useState(false);

    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

//댓글 서버에 요청
    useEffect(()=>{
        dispatch(commentListAction.commentList(postId, token))
        dispatch(postAction.getPost(postId))
    },[dispatch, postId, token])

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <HomeImgPost />
            {commentList !== '' ? 
            <CommentList/> :
             <></>}
            <CommentInputBox />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default PostPage
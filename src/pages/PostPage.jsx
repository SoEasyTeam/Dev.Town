import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopBasicNav } from '../components/common/nav';
import PostInDetail from '../components/common/PostInDetail';
import CommentInputBox from '../components/comment/commentInput';
import CommentList from '../components/comment/commentList';
import { AlertLogoutModal } from '../components/common/alert';
import { commentListAction } from '../redux/actions/commentListAction';
import { postAction } from '../redux/actions/postAction';
import { PostSection } from '../components/post/index.style';

function PostPage() {
    const dispatch = useDispatch()

    //post 고유 아이디 가져오기
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    console.log(postViewId);
    console.log(id);

    const postId = postViewId.filter(i => i === id);
    console.log(postId);

    const postItem = useSelector(state => state.homefeed.item);
    console.log(postItem);

    const number = postViewId.indexOf(id);
    const item = useSelector(state => state.homefeed.item[number]);
    // console.log(item,'왜에러니');

    function parseDate(dateString) {
        const postDate = new Date(dateString)
        const year = postDate.getFullYear();
        const month = postDate.getMonth() + 1;
        const day = postDate.getDate();
        return [year, month, day]
    }

    const [year, month, day] = parseDate(item.createdAt);

    //댓글 가져오기
    const commentList = useSelector(state => state.commentList.comment)
    const token = useSelector(state => state.auth.token)

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
    useEffect(() => {
        dispatch(commentListAction.commentList(postId, token))
        console.log('댓글받아와!!');
        dispatch(postAction.getPost(postId))
    }, [dispatch, postId, token])

    // const post = useSelector(state=>state.getPost.post)

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <PostSection>
                <PostInDetail
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
                    postId={item.id}
                />
                {commentList !== '' ?
                    <CommentList /> :
                    <></>}
            </PostSection>
            <CommentInputBox />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default PostPage
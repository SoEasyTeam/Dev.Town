import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TopBasicNav } from '../components/common/nav';
import PostInDetail from '../components/common/PostInDetail';
import CommentInputBox from '../components/comment/commentInput';
import CommentList from '../components/comment/commentList';
import { AlertLogoutModal } from '../components/common/alert';
import { commentListAction } from '../redux/actions/commentListAction';
import { postAction } from '../redux/actions/postAction';
import { PostSection, CommentUl } from '../components/post/index.style';

function PostPage() {
    const dispatch = useDispatch()
    const location = useLocation();
    const postItem = useSelector(state => state.getPost.post);
    const id = location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(postAction.getPost(id));
    }, [id, dispatch])

    function parseDate(dateString) {
        const postDate = new Date(dateString)
        const year = postDate.getFullYear();
        const month = postDate.getMonth() + 1;
        const day = postDate.getDate();
        return [year, month, day]
    }

    const [year, month, day] = parseDate(postItem.createdAt);
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
        dispatch(commentListAction.commentList(id))
    }, [dispatch, id])

    // 댓글 가져오기
    const commentList = useSelector(state => state.commentList.comments)

    console.log(commentList);
    return (
        postItem === '' ? <></> :
            <>
                <TopBasicNav alertOnModal={alertOnModal} />
                <PostSection>
                    <PostInDetail
                        profileimg={postItem.author.image}
                        nickname={postItem.author.username}
                        id={postItem.author.accountname}
                        postparagraph={postItem.content}
                        postsrc={postItem.image}
                        heartCount={postItem.heartCount}
                        hearted={postItem.hearted}
                        commentCount={postItem.commentCount}
                        year={year}
                        month={month}
                        day={day}
                        postId={postItem.id}
                    />
                </PostSection>
                {commentList !== '' ?
                    <CommentUl>
                        <CommentList commentList={commentList} />
                    </CommentUl> :
                    <></>
                }
                <CommentInputBox postId={id} />
                {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
            </>
    )
}

export default PostPage
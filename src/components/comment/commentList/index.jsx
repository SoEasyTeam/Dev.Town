import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { commentListAction } from '../../../redux/actions/commentListAction';
import { postAction } from '../../../redux/actions/postAction'
import { useParams } from 'react-router-dom';
import CommentItem from "../commentItem";
const parseDate = (dateString) => {
    const postDate = new Date(dateString)
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day]
}

export default function CommentList() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const postId = id
    // console.log(postId, '포스트아뒤');
    const token = useSelector(state => state.auth.token)
    const commentList = useSelector(state => state.commentList.comments)
    
    useEffect(() => { 
        // dispatch(postAction.getPost(postId))
        dispatch(commentListAction.commentList(postId, token))
    }, [dispatch, commentList])
    return (
        <ul>
            {commentList && commentList.map((comment, index) => {
                const [year, month, day] = parseDate(comment.createdAt);
                return <CommentItem
                    key={index}
                    commentFrom={comment.author.username}
                    commentorImg={comment.author.image}
                    commentYear={year}
                    commentMonth={month}
                    commentDay={day}
                    comment={comment.content}
                    id={comment.author.accountname}
                />
            })
            }
        </ul>
    )
}
import { useSelector } from 'react-redux'
import CommentItem from "../commentItem";
import { useEffect } from 'react';

const parseDate = (dateString) => {
    const postDate = new Date(dateString)
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day]
}

export default function CommentList() {
    const commentList = useSelector(state => state.commentList.comments)
    useEffect(() => { }, [commentList])
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
                />
            })
            }
        </ul>
    )
}
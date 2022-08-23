import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { commentListAction } from '../../../redux/actions/commentListAction';
import { postAction } from '../../../redux/actions/postAction'
import { useParams } from 'react-router-dom';
import CommentItem from "../commentItem";
import parseDate from '../../../utils/parseData'

export default function CommentList({commentList}) {
    console.log(commentList)
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
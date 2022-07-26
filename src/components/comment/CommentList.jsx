import {useSelector} from 'react-redux'
import CommentItem from "./CommentItem";

export default function CommentList({commentData}){
    const commentList = useSelector(state=>state.commentList.comment)
    console.log('ok?', commentList);
    return (
        <>
            {commentData &&
                commentData.map(comment=>{
                    return <CommentItem />
                })
            }
        </>
    )
}
import styled from 'styled-components';
import {useSelector} from 'react-redux'
import CommentItem from "./CommentItem";

const CommentListUl = styled.ul`
    
`


export default function CommentList({commentData}){
    const commentList = useSelector(state=>state.commentList.comments)
    console.log('ok?', commentList);
    return (
        <CommentListUl>
            {commentList && commentList.map((comment, index)=>{
                    return <CommentItem 
                    key={index} 
                    CommentFrom = {comment.author.username}
                    CommentDate = {comment.createdAt}
                    Comment = {comment.content}
                    />
                })
            }
        </CommentListUl>
    )
}
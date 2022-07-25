import {TopBasicNav} from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CommentInputBox from '../components/comment/CommentInput'
import CommentList from '../components/comment/CommentList'

function PostPage(){
    const { id } = useParams();
    const postViewId = useSelector(state=>state.homefeed.item).map((i) => i.id);
    console.log(postViewId);
    console.log(id);
    const postId = postViewId.filter(i => i === id);
    console.log(postId);

    return(
        <>
        <TopBasicNav/>
        <HomeImgPost />
        <CommentList/>
        <CommentInputBox/>
        </>
    )
}

export default PostPage
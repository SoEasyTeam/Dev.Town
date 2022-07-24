import {TopBasicNav} from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import Comment from '../components/comment/Comment'
import CommentList from '../components/comment/CommentList'

function PostPage(){
    return(
        <>
        <TopBasicNav/>
        <HomeImgPost />
        <CommentList/>
        <Comment/>
        </>
    )
}

export default PostPage
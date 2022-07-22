import {TopBasicNav} from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import Comment from '../components/common/Comment'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PostPage(){
    const { id } = useParams();
    const postViewId = useSelector(state=>state.homefeed.item).map((i) => i.id);
    console.log(postViewId);
    console.log(id);
    const postId = postViewId.filter(i => i === id);
    console.log(postId);
    // 전체 포스트에서 -> post와 같은 것을 뽑아내면 됩니다.

    return(
        <>
            <TopBasicNav/>
            <HomeImgPost />
            <Comment/>
        </>
    )
}

export default PostPage
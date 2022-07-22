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

    return(
        <>
            <TopBasicNav/>
            <HomeImgPost />
            <Comment/>
        </>
    )
}

export default PostPage
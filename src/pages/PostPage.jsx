import { useState } from 'react'
import { TopBasicNav } from '../components/common/TopNav'
import HomeImgPost from '../components/common/HomeImgPost'
import Comment from '../components/common/Comment'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AlertLogoutModal } from '../components/common/AlertModal'

function PostPage() {
    const { id } = useParams();
    const postViewId = useSelector(state => state.homefeed.item).map((i) => i.id);
    console.log(postViewId);
    console.log(id);
    const postId = postViewId.filter(i => i === id);
    console.log(postId);
    // alert 모달창
    const [alertOn, setAlertOn] = useState(false);
    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = "unset";
        setAlertOn(false);
    }

    return (
        <>
            <TopBasicNav alertOnModal={alertOnModal} />
            <HomeImgPost />
            <Comment />
            {alertOn === true ? <AlertLogoutModal alertOffModal={alertOffModal} /> : ''}
        </>
    )
}

export default PostPage
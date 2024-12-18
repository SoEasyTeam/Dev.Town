import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeImgPost from '@components/common/HomeImgPost';
import { AlertDeclareModal } from '@components/common/alert';
import {
    HomeFollowerUl,
    HomePostItem,
} from '@components/home/HomeFeed/index.style';
import parseDate from '@utils/parseDate';

function HomeFeed() {
    const [alertOn, setAlertOn] = useState(false);
    const posts = useSelector((state) => state.homefeed.item);

    function alertOnModal() {
        setAlertOn(true);
    }
    function alertOffModal() {
        document.body.style.overflow = 'unset';
        setAlertOn(false);
    }

    return (
        <>
            <HomeFollowerUl>
                {posts.map((item, index) => {
                    const [year, month, day] = parseDate(item.createdAt);
                    return (
                        <HomePostItem key={index}>
                            <HomeImgPost
                                profileimg={item.author.image}
                                nickname={item.author.username}
                                id={item.author.accountname}
                                postId={item.id}
                                postparagraph={item.content}
                                postsrc={item.image}
                                heartCount={item.heartCount}
                                hearted={item.hearted}
                                commentCount={item.commentCount}
                                year={year}
                                month={month}
                                day={day}
                                alertOnModal={alertOnModal}
                            />
                        </HomePostItem>
                    );
                })}
            </HomeFollowerUl>
            {alertOn === true ? (
                <AlertDeclareModal alertOffModal={alertOffModal} />
            ) : (
                ''
            )}
        </>
    );
}

export default HomeFeed;

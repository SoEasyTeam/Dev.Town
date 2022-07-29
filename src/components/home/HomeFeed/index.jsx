import React from 'react'
import { useSelector } from 'react-redux';
import HomeImgPost from '../../common/HomeImgPost';
import { HomeFollowerUl, HomePostItem } from './index.style';

function HomeFeed() {
    const parseDate = (dateString) => {
        const postDate = new Date(dateString)
        const year = postDate.getFullYear();
        const month = postDate.getMonth() + 1;
        const day = postDate.getDate();
        return [year, month, day]
    }
    const posts = useSelector(state => state.homefeed.item);
    return (
        <HomeFollowerUl>
            {
                posts.map((item, index) => {
                    const [year, month, day] = parseDate(item.createdAt);
                    return (
                        <HomePostItem key = {index}>
                            <HomeImgPost
                                profileimg={item.author.image}
                                nickname={item.author.username}
                                id={item.author.accountname}
                                postId = {item.id}
                                postparagraph={item.content}
                                postsrc={item.image}
                                heartCount={item.heartCount}
                                commentCount={item.commentCount}
                                year={year}
                                month={month}
                                day={day}
                            />
                        </HomePostItem>
                    )
                })
            }
        </HomeFollowerUl>
    )
}

export default HomeFeed
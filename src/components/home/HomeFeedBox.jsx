import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import HomeImgPost from '../common/HomeImgPost';
import HomePost from '../common/HomePost';

const HomeFollwerList  = styled.ul`
    margin: 20px auto;
    width: 390px;
`

const parseDate = (dateString) => {
    const postDate = new Date(dateString)
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return [year, month, day]
}

const HomeFeedBox = () => {
    const posts = useSelector(state=>state.homefeed.item);
    console.log(posts);
    return (
        <>
            <HomeFollwerList>
                {
                    posts.map((item, index) => {
                        const [year, month, day] = parseDate(item.createdAt);
                        return (
                            <li key = {index}>
                                <HomeImgPost
                                    profileimg={item.author.image}
                                    nickname={item.author.username}
                                    id={item.author.accountname}
                                    postparagraph={item.content}
                                    postsrc={item.image}
                                    heartCount={item.heartCount}
                                    commentCount={item.commentCount}
                                    year={year}
                                    month={month}
                                    day={day}
                                />
                            </li>
                        )
                    })
                }
            </HomeFollwerList>
        </>
    )
}

export default HomeFeedBox
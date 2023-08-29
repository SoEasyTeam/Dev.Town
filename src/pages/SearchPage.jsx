import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TabMenu from '../components/common/tabMenu';
import { TopSearchNav } from '../components/common/nav';
import { FollowPageLink, UserFollowBox } from '../components/list/followList/index.style';
import { IdP, NameIdBox, NickNameP, ProfileLogoImg } from '../components/common/search/index.style';
import styled from 'styled-components';
import { API_URL } from '../constants/defaultUrl';

const SearchBox = styled.div`
    margin: 0 16px;
`

export default function SearchPage() {
    const token = useSelector(state => state.auth.token);
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (keyword.length > 1) {
            setTimeout(() => {
                const searchData = async () => {
                    const res = await fetch(
                        `${API_URL}/user/searchuser/?keyword=` +
                        keyword,
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-type': 'application/json',
                            },
                        }
                    );
                    const json = await res.json();
                    setSearchResult(json);
                };
                searchData();
            }, 700);
        }
    }, [keyword, token]);

    return (
        <>
            <TopSearchNav onChange={(e) => setKeyword(e.target.value)} />
            {searchResult ?
                searchResult.map((user, index) => {
                    return (
                        <SearchBox key={index}>
                            <UserFollowBox>
                                <FollowPageLink to={{ pathname: '/yourpage', search: `?id=${user.accountname}` }} >
                                    <ProfileLogoImg src={user.image} alt='프로필로고' />
                                    <NameIdBox>
                                        <NickNameP>{user.username}</NickNameP>
                                        <IdP>@ {user.accountname}</IdP>
                                    </NameIdBox>
                                </FollowPageLink>
                            </UserFollowBox>
                        </SearchBox>
                    )
                }) :
                <p>검색결과가 없습니다.</p>}
            <TabMenu />
        </>
    );
}

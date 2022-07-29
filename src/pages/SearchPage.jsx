import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TabMenu from '../components/common/TabMenu';
import { TopSearchNav } from '../components/common/nav';
import { searchAction } from '../redux/actions/searchAction';

export default function SearchPage() {
    const token = useSelector((state) => state.auth.token);
    const accountname = useSelector((state) => state.auth.accountname);
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    let dispatch = useDispatch();
    let searchUserList = useSelector((state) => state.search.userList);

    useEffect(() => {
        // dispatch(searchAction.search(token, keyword));
        console.log(keyword.length);
        console.log(token);
        const tempToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2FkNjA3ODJmZGNjNzEyZjQzN2QyZCIsImV4cCI6MTY2MjcxMDYxOCwiaWF0IjoxNjU3NTI2NjE4fQ.w47m557FRqRQhF8PGM_VUxF10mFtDexYJIxqUasFQ7I';
        if (keyword.length > 1) {
            const searchData = async () => {
                const res = await fetch(
                    'https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=' +
                    keyword,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${tempToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                );
                const json = await res.json();
                console.log(json);
                setSearchResult(json);
            };
            searchData();
        }
    }, [keyword]);

    return (
        <>
            <TopSearchNav onChange={(e) => setKeyword(e.target.value)} />
            {searchResult ?
                searchResult.map((user) => {
                    return <p key={user.id}>{user.username}</p>;
                }) :
                <p>검색결과가 없습니다.</p>}
            <TabMenu />
        </>
    );
}

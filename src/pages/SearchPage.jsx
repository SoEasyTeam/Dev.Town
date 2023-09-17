import { useEffect, useState } from 'react';
import TabMenu from '@components/common/tabMenu';
import { TopSearchNav } from '@components/common/nav';
import {
    FollowPageLink,
    UserFollowBox,
} from '@components/list/followList/index.style';
import {
    IdP,
    NameIdBox,
    NickNameP,
    ProfileLogoImg,
} from '@components/common/search/index.style';
import styled from 'styled-components';
import { checkHangul } from '@/utils/checkHangul';
import { customAxios } from '@/api';
import DefaultProfileImg from '@public/assets/icon/icon-user.svg';
import useDebounce from '@/hooks/useDebounce';

const SearchBox = styled.div`
    margin: 0 16px;
`;

export default function SearchPage() {
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    const debounceWord = useDebounce(keyword, 500);

    const searchData = async () => {
        try {
            const url = `/user/searchuser/?keyword=` + debounceWord;
            const data = await customAxios('GET', null, url);
            setSearchResult(data);
        } catch (error) {
            console.log('search error : ', error);
        }
    };

    useEffect(() => {
        if (keyword.length <= 1) return;
        searchData();
    }, [debounceWord]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const completedInput = checkHangul(inputValue);
        setKeyword(completedInput);
    };

    return (
        <>
            <TopSearchNav onChange={handleChange} />
            {searchResult ? (
                searchResult.map((user, index) => {
                    return (
                        <SearchBox key={index}>
                            <UserFollowBox>
                                <FollowPageLink
                                    to={{
                                        pathname: '/yourpage',
                                        search: `?id=${user.accountname}`,
                                    }}
                                >
                                    <ProfileLogoImg
                                        src={user.image}
                                        alt='프로필로고'
                                        onError={(e) =>
                                            (e.target.src = DefaultProfileImg)
                                        }
                                    />
                                    <NameIdBox>
                                        <NickNameP>{user.username}</NickNameP>
                                        <IdP>@ {user.accountname}</IdP>
                                    </NameIdBox>
                                </FollowPageLink>
                            </UserFollowBox>
                        </SearchBox>
                    );
                })
            ) : (
                <p>검색결과가 없습니다.</p>
            )}
            <TabMenu />
        </>
    );
}

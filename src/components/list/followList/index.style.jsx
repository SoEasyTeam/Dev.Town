import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SBtn } from '../../common/button/index.style';
import { UserSearchBox } from '../../common/search/index.style';

export const FollowBoxUl = styled.ul`
padding: 24px 16px;
`

export const UserFollowBox = styled(UserSearchBox)`
    position: relative;
    margin-bottom: 16px;
`;

export const FollowPageLink = styled(Link)`
    display: inherit;
`

export const FollowSBtn = styled(SBtn)`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    position: absolute;
    right: 0px;
    top: 11px;
`
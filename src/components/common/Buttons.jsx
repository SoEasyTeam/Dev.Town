import styled from 'styled-components';

const LBtns = styled.button`
    width: 322px;
    height: 44px;
    ${({isActive}) => {
        return isActive === true? `background-color: var(--main-color)` : `background-color: var(--main-disabled-color)`}
    };
    border-radius: 44px;
    color: var(--subtitle-text);
`

const MBtns = styled.button`
    width: 120px;
    height: 34px;
    ${({isFollowed}) => {
        return isFollowed === true? `background-color: var(--bg-color)` : `background-color: var(--main-color)`}
    };
    border: 1px solid #DBDBDB;
    border-radius: 30px;
    color: var(--subtitle-text);
`

const MsBtns = styled.button`
    width: 90px;
    height: 32px;
    ${({isActive}) => {
        return isActive === true? `background-color: var(--main-color)` : `background-color: var(--main-disabled-color)`}
    };
    border-radius: 32px;
    color: var(--subtitle-text);
`

const SBtns = styled.button`
    width: 65px;
    height: 28px;
    ${({isFollowed}) => {
        return isFollowed === true? `background-color: var(--bg-color)` : `background-color: var(--main-color)`}
    };
    border: 1px solid #DBDBDB;
    border-radius: 30px;
    color: var(--subtitle-text);
`

function LBtn({isActive}) {
    return (
        <LBtns type='button' isActive={isActive}>다음</LBtns>
    )
}

function MBtn({isFollowed}) {
    return (
        <MBtns type='button' isFollowed={isFollowed}>
            {isFollowed === true? '언팔로우' : '팔로우'}
        </MBtns>
    )
}

function MsBtn({isActive}) {
    return (
        <MsBtns type='button' isActive={isActive}>저장</MsBtns>
    )
}

function SBtn({isFollowed}) {
    return (
        <SBtns type='button' isFollowed={isFollowed}>
            {isFollowed === true? '언팔로우' : '팔로우'}
        </SBtns>
    )
}

export { LBtn, MBtn, MsBtn, SBtn };
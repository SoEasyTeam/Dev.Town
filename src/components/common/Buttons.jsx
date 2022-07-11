import styled from 'styled-components';

const LBtn = styled.button`
    width: 322px;
    height: 44px;
    ${({ FormReady }) => {
        return FormReady === true
            ? `background-color: var(--main-color)`
            : `background-color: var(--main-disabled-color)`;
    }}; //Form 입력 완료 시 버튼 색깔 진하게 변화
    border-radius: 44px;
    color: var(--subtitle-text);
`;

const MlBtn = styled.button`
    width: 120px;
    height: 44px;
    border-radius: 44px;
    background-color: var(--main-color);
    color: var(--subtitle-text);
`//검색하기, 이전페이지(404)




const MBtn = styled.button`
    width: 120px;
    height: 34px;
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `background-color: var(--bg-color)`
            : `background-color: var(--main-color)`;
    }};
    border: 1px solid var(--border-gray);
    border-radius: 30px;
    color: var(--subtitle-text);
`;

const MsBtn = styled.button`
    width: 90px;
    height: 32px;
    background-color: var(--main-color);
    border-radius: 32px;
    color: var(--subtitle-text);
`; //저장, 업로드 버튼

const SBtn = styled.button`
    width: 56px;
    height: 28px;
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `background-color: var(--bg-color)`
            : `background-color: var(--main-color)`;
    }};
    ${({ isFollowed }) => {
        return isFollowed === true
            ? `border: 1px solid var(--border-gray)`
            : `border: none`;
    }};
    border-radius: 28px;
    color: var(--subtitle-text);
`;

export { LBtn, MlBtn, MBtn, MsBtn, SBtn };

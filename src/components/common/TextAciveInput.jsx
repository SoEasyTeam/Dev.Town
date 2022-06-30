import React from 'react';
import styled from 'styled-components';

const TextInputBox = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const TextLabel = styled.label`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
`;

const TextInput = styled.input.attrs({
    type: 'text',
    id: 'productName',
})`
    border: none;
    border-bottom: 1px solid var(--border-gray);
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    padding-bottom: 8px;
    &:focus {
        border-bottom: 1px solid var(--main-color);
    }
`;

// 패스워드 Input
export const PassWordInput = styled(TextInput).attrs({
    type: 'password',
    id: 'loginPassword',
})``;

// 이메일 Input
export const EmailInput = styled(TextInput).attrs({
    type: 'email',
    id: 'loginEmail',
})``;

export const ProfileNameInput = styled(TextInput).attrs({
    id: 'profileName',
    placeholder: '2~10자 이내여야 합니다.',
})``;

export const ProfileId = styled(TextInput).attrs({
    id: 'profileId',
    placeholder: '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.',
})``;

export const ProfileIntroduce = styled(TextInput).attrs({
    id: 'profileIntroduce',
    placeholder: '자신과 판매할 상품에 대해 소개해 주세요!',
})``;

export const ProductName = styled(TextInput).attrs({
    id: 'productName',
    placeholder: '2~15자 이내여야 합니다.',
})``;

export const ProductPrice = styled(TextInput).attrs({
    id: 'productPrice',
    placeholder: '숫자만 입력 가능합니다.',
})``;

export const ProductLink = styled(TextInput).attrs({
    id: 'productLink',
    placeholder: 'URL을 입력해 주세요.',
})``;

function TextAciveInput() {
    return (
        <>
            <TextInputBox>
                <TextLabel>이메일</TextLabel>
                <EmailInput />
            </TextInputBox>
        </>
    );
}

export default TextAciveInput;

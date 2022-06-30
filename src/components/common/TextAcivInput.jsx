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
const TextInput = styled.input`
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

function TextAcivInput() {
    return (
        <>
            <TextInputBox>
                <TextLabel for='product-name'>이메일</TextLabel>
                <TextInput type='email' id='product-name' />
            </TextInputBox>
        </>
    );
}

export default TextAcivInput;

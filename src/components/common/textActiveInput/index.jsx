import React from 'react';
import { TextInputBox, TextLabel, TextInput, PassWordInput, EmailInput, ProfileNameInput, ProfileId, ProfileIntroduce, ProductName, ProductPrice, ProductLink } from './index.style'

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

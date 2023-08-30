import React from 'react';
import {
    TextInputBox,
    TextLabel,
    EmailInput,
} from '@components/common/textActiveInput/index.style';

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

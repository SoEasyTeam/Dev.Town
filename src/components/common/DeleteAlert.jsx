import styled from 'styled-components';

const DeleteAlertBox = styled.div`
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 252px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    text-align: center;
    position: relative;
`;

const AlertP = styled.p`
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 44px;
    padding: 22px 0;
`;
const ButtonBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 0.5px solid #dbdbdb;
`;

const CancelBtn = styled.button`
    box-sizing: border-box;
    padding: 14px 0;
    width: 50%;
    height: inherit;
    float: left;
    font-size: 14px;
`;

const DeleteBtn = styled(CancelBtn)`
    color: #f26e22;
    border-left: 0.5px solid #dbdbdb;
`;

export default function DeleteAlert() {
    return (
        <DeleteAlertBox>
            <AlertP>상품을 삭제할까요?</AlertP>
            <ButtonBox>
                <CancelBtn>취소</CancelBtn>
                <DeleteBtn>삭제</DeleteBtn>
            </ButtonBox>
        </DeleteAlertBox>
    );
}

import styled from 'styled-components';

export const AlertBox = styled.div`
    display: flex;
    justify-content: center;
`
export const AlertOutside = styled.div`
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`
export const AlertContainer = styled.section`
    position: fixed;
    z-index: 200;
    width: 252px;
    height: 110px;
    top: 50%;
    background-color: #fff;
    border-radius: 10px;
    .alertMsg{
        display: block;
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        padding: 22px 0;
        text-align: center;
    }
`

export const AlertUl = styled.ul`
    display: flex;
    border-top: 0.5px solid #DBDBDB;
    li{
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        width: 50%;
        text-align: center;
        padding: 14px 0;
        cursor: pointer;
    }
    .selectColor{
        color: var(--main-color);
        border-left: 0.5px solid #DBDBDB;
    }
`

export const DeleteAlertBox = styled.div`
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 252px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    text-align: center;
    position: relative;
`;

export const AlertP = styled.p`
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 44px;
    padding: 22px 0;
`;

export const ButtonBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 0.5px solid #dbdbdb;
`;

export const CancelBtn = styled.button`
    box-sizing: border-box;
    padding: 14px 0;
    width: 50%;
    height: inherit;
    float: left;
    font-size: 14px;
`;

export const DeleteBtn = styled(CancelBtn)`
    color: #f26e22;
    border-left: 0.5px solid #dbdbdb;
`;

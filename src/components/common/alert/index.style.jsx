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

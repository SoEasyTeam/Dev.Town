import styled from 'styled-components';

export const ProductAreaListUl = styled.ul`
    list-style: none;
    margin-left: 16px;
    height: 152px;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    li {
        float:left;
        margin-right: 16px;
        margin-bottom: 19.5px;
        cursor: pointer;
    }
`

export const ProductArea = styled.article`
    width: 100vw;
    border-bottom: 0.5px solid #DBDBDB;
    border-top: 0.5px solid #DBDBDB;
    background: #FFFFFF;
    margin-bottom: 6px;
    .productAreaDiv {
        max-width: 640px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .productAreaTitle {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin: 19.5px 0 16px 16px;
    }
`
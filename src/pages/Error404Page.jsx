import ErrorIcon from '../assets/error404-icon.png'
import styled from 'styled-components';
import { LBtn, MBtn, MsBtn, SBtn, MBtns } from '../components/common/Buttons'

const ErrorPageBox=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorMessage=styled.p`
    margin:20px 0;
    font-size: 14px;
    color: var(--subtitle-text);
`
function Error404Page(){
    return (
    <ErrorPageBox>
        <img src={ErrorIcon} alt='404에러' style={{width:158, height:158}}/>
        <ErrorMessage>페이지를 찾을 수 없습니다 :(</ErrorMessage>
        <MBtns/>
    </ErrorPageBox>
    )
}

export default Error404Page;
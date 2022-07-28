import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ErrorIcon from '../assets/error404-icon.png'
import { MlBtn } from '../components/common/Buttons'

const ErrorPageBox=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorMessage=styled.p`
    margin:25px 0;
    font-size: 14px;
    color: var(--subtitle-text);
`

const PrevPageLink=styled(MlBtn)

function Error404Page(){
    const history = useHistory();

    return (
    <ErrorPageBox>
        <img src={ErrorIcon} alt='404에러' style={{width:148, height:148}}/>
        <ErrorMessage>페이지를 찾을 수 없습니다 :(</ErrorMessage>
        <MlBtn onClick={()=>{history.push('./home')}}>홈페이지로 가기</MlBtn>
    </ErrorPageBox>
    )
}

export default Error404Page;
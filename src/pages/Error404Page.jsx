import ErrorIcon from '../assets/error404-icon.png'
import styled from 'styled-components';
// const Error404Img = styled.img`

// `
function Error404Page(){
    <>
    <img src={ErrorIcon} alt='404에러' style={{width:100, height:100}}/>
    </>
}

export default Error404Page;
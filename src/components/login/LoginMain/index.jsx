import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticateAction } from '../../../redux/actions/authenticateAction';
import { EmailInput, PassWordInput, TextLabel } from '../../common/TextAciveInput';
import { JoinEmailLink, LoginBtn, WarningParagraph } from './index.style';

function LoginMain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();   
  const history = useHistory();
  let authLogin = useSelector(state => state.auth.authenticate);
  
  //이메일 주소 유효성 검사
  const checkEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //로그인버튼 활성화 검사
  const loginActive = () => {
      return checkEmail.test(email)&&password.length>5
      ? setIsActive(false)
      : setIsActive(true);
  };
  
  const onSubmitHandler = (event) => {
      event.preventDefault();
      // console.log('login user function issue');
      dispatch(authenticateAction.login(email, password));
  }

  useEffect(() => {
      if(authLogin === true) {
          history.push('/home');
      }
  },[authLogin, history]);

  return (
      <LoginMain>
          <h1 className='ir'>데브타운 로그인 화면</h1>
          <h2 className='loginTitle'>로그인</h2>
          <form className='loginForm' onSubmit={onSubmitHandler}>
              <TextLabel>이메일</TextLabel>
              <EmailInput value={email} onChange = {(event) => setEmail(event.target.value)} onKeyUp={loginActive} />
              <TextLabel>비밀번호</TextLabel>
              <PassWordInput value={password} onChange = {(event) => setPassword(event.target.value)} onKeyUp={loginActive}/>
              <WarningParagraph visible={isActive}>*필수 입력사항을 입력해주세요.</WarningParagraph>
              <div className='loginBtnWrap'>
                  <LoginBtn disabled={isActive} >로그인</LoginBtn>
                  <JoinEmailLink to='/join'>이메일로 회원가입</JoinEmailLink>
              </div>
          </form>
      </LoginMain>
  )
}

export default LoginMain;
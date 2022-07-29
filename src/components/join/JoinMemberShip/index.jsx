import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WarningParagraph } from '../../../pages/LoginPage';
import { joinAction } from '../../../redux/actions/joinAction';
import { TextLabel } from '../../common/TextAciveInput';
import { JoinEmailInput, JoinPassWordInput, LoginMain, NextBtn } from './index.style';

function JoinMembership() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(true);
  // const [isEmailValid, setEmailValid] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const message = useSelector(state=> state.join.message);

  //이메일 주소 유효성 검사
  const checkEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //다음버튼 활성화 검사
  const nextSignUpActive = () => {
      return checkEmail.test(email)&&password.length>5
      ? setIsActive(false)
      : setIsActive(true);
  };

  const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log('버튼 클릭')
      dispatch(joinAction.join(email,password));
  }

  useEffect(() => {
      if(message === '사용 가능한 이메일 입니다.'){
          history.push('/profilesetting');
      }
  }, [message])

  return (
      <LoginMain>
          <h1 className='ir'>데브타운 회원가입 화면</h1>
          <h2 className='loginTitle'>이메일로 회원가입</h2>
          <form className='loginForm' onSubmit={ onSubmitHandler }>
              <TextLabel>이메일</TextLabel>
              <JoinEmailInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} onKeyUp={nextSignUpActive}/>
              <TextLabel>비밀번호</TextLabel>
              <JoinPassWordInput value={password} onChange={(event) => setPassword(event.currentTarget.value)} onKeyUp={nextSignUpActive}/>
              <WarningParagraph visible={isActive}>*필수 입력사항을 입력해주세요.</WarningParagraph>
              {/* <WarningParagraph visible={isEmailValid}>*이미 가입된 이메일 주소 입니다.</WarningParagraph> */}
              <div className='nextBtnWrap'>
                  <NextBtn disabled={isActive}>다음</NextBtn>
              </div>
          </form>
      </LoginMain>
  )
}

export default JoinMembership;
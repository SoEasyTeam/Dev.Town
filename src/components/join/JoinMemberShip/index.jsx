import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WarningParagraph } from '../../login/LoginMain/index.style';
import { joinAction } from '../../../redux/actions/joinAction';
import { TextLabel } from '../../common/textActiveInput/index.style';
import { JoinEmailInput, JoinPassWordInput, LoginMain, NextBtn } from './index.style';

function JoinMembership() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [emailPop, setEmailPop] = useState(false);
    const [passwordPop, setpasswordPop] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const message = useSelector(state=> state.join.message);

    //이메일 주소 유효성 검사
    const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    //다음버튼 활성화 검사
    const nextSignUpActive = () => {
        return message==='사용 가능한 이메일 입니다.'&&password.length>5
        ? setIsActive(false)
        : setIsActive(true);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(joinAction.join(email,password));
        history.push('/profilesetting')
    }

    // const onChangeEmailHandler = (event) => {
    //     setEmail(event.currentTarget.value);
    // }

    useEffect(() => {
        if(checkEmail.test(email)){
            dispatch(joinAction.join(email,password));
            setEmailPop(true);
        }
    }, [email])

    useEffect(() => {
        if(checkEmail.test(email)&&password.length<6){
            setEmailPop(false);
            setpasswordPop(true);
        }else if(password.length>5) {
            setpasswordPop(false)
        }
    }, [password])

    // useEffect(() => {
    //     message === '사용 가능한 이메일 입니다.' ? setEmailPop(false) : setEmailPop(true);
    // }, [message])

    return (
        <LoginMain>
            <h1 className='ir'>데브타운 회원가입 화면</h1>
            <h2 className='loginTitle'>이메일로 회원가입</h2>
            <form className='loginForm' onSubmit={onSubmitHandler}>
                <TextLabel>이메일</TextLabel>
                <JoinEmailInput value={email} onChange={(event) => setEmail(event.target.value)} onKeyUp={nextSignUpActive}/>
                <TextLabel>비밀번호</TextLabel>
                <JoinPassWordInput value={password} onChange={(event) => setPassword(event.target.value)} onKeyUp={nextSignUpActive}/>
                <WarningParagraph visible={emailPop}>*{message}</WarningParagraph>
                <WarningParagraph visible={passwordPop}>*비밀번호는 6자 이상이어야 합니다.</WarningParagraph>
                <div className='nextBtnWrap'>
                    <NextBtn disabled={isActive}>다음</NextBtn>
                </div>
            </form>
        </LoginMain>
    )
}

export default React.memo(JoinMembership);
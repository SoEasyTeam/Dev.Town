import {
    ErrorIcon,
    ErrorPageBox,
    ErrorMessage,
} from '../components/error/index.style';
import { MlBtn } from '../components/common/button/index.style';

function Error404Page() {
    return (
        <ErrorPageBox>
            <ErrorIcon />
            <ErrorMessage>페이지를 찾을 수 없습니다 :(</ErrorMessage>
            <MlBtn to='/'>홈페이지로 가기</MlBtn>
        </ErrorPageBox>
    );
}

export default Error404Page;

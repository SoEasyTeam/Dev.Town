import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TopUploadNav } from '../components/common/TopNav';
import {
    DefaultProfileImg,
    ImgUploadBtn,
} from '../components/common/ProfileButtons';

import { postAction } from '../redux/actions/postAction';
import { uploadFilesAction } from '../redux/actions/uploadFilesAction';

const UploadForm = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const UploadSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px;
`;

const UploadInputSection = styled.section`
    /* display: flex; */
    flex-direction: column;

    .uploadInput {
        width: 70vw;
        height: auto;
        border: none;
    }

    .uploadInput::placeholder {
        position: absolute;
        top: 0;
    }
`;

const UploadImgInput = styled.input`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
`;

function UploadPage() {
    const history = useHistory();
    const [postText, setPostText] = useState('');
    const [uploadedImg, setUploadedImg] = useState('');
    const [imgPreview, SetImgPreview] = useState([]);
    const fileInputRef = useRef();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const formData = useSelector((state)=>state.upload.formData)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (uploadedImg === '' && postText === '') {
            alert('게시물을 작성해주세요');
        } else {
            console.log('submit succeed');
            history.push('/myprofile');
            dispatch(postAction.post(token, uploadedImg, postText));
            dispatch(uploadFilesAction.files(token, formData));
        }
    };

    const HandlePostText = (e) => {
        setPostText(e.target.value);
    };
    useEffect(() => {
        const formData = new FormData()
        for (let index = 0; index < uploadedImg.length; index++) {
            formData.append('image',uploadedImg[index])
            const file = uploadedImg[index];
            const reader = new FileReader();
            reader.onloadend = () => {
                SetImgPreview((prev) => {
                    const newPreviews = [...prev, reader.result];
                    if (newPreviews.length > 3){
                        const newPreviewsSliced = newPreviews.slice(0,3)
                        return newPreviewsSliced
                    }
                    return newPreviews;
                });
            };
            reader.readAsDataURL(file);
        }
    }, [uploadedImg]);


    return (
        <>
            <UploadForm onSubmit={onSubmitHandler}>
                <TopUploadNav />
                <UploadSection>
                    <div className='profileImg'>
                        <DefaultProfileImg />
                    </div>
                    <UploadInputSection>
                        <textarea
                            className='uploadInput'
                            placeholder='게시글 입력하기...'
                            rows={10}
                            onChange={HandlePostText}
                        />
                        {imgPreview &&
                            imgPreview.map((imgUrl) => (
                                <article>
                                    <img
                                        className='uploaded-img'
                                        src={imgUrl}
                                        alt='게시물 이미지'
                                        style={{
                                            maxWidth: '500px',
                                            maxHeight: '500px',
                                        }}
                                    />
                                </article>
                            ))}
                        <UploadImgInput
                            type='file'
                            multiple='multiple'
                            name='uploadedImg'
                            id='uploadedImg'
                            accept='image/*'
                            ref={fileInputRef}
                            onChange={(e) => {
                                // 파일리스트를 받는다
                                // 파일리스트들을 각각 url로 만들어준다
                                // 이미지 url들을 가지고있는 배열이 생긴다
                                // 이 배열을 api명세에 맞게 문자열로 만든다.
                                // Post업로드 요청을한다.

                                const fileList = e.target.files;

                                // const file = e.target.files[0];
                                if (fileList.length > 0) {
                                    setUploadedImg(fileList);
                                    console.log('image set!');
                                } else {
                                    setUploadedImg(null);
                                }
                            }}
                        />
                        <ImgUploadBtn
                            htmlFor='uploadedImg'
                            onClick={(e) => {
                                e.preventDefault();
                                fileInputRef.current.click();
                            }}
                        />
                    </UploadInputSection>
                </UploadSection>
            </UploadForm>
        </>
    );
}

export default UploadPage;

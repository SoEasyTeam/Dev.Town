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

    .preview-area {
        display: flex;
        gap: 5px;
        overflow-x: auto;
        height: 171px;
    }
    .preview-area .preview-item {
        border-radius: 10px;
        width: 168px;
        height: 171px;
        object-fit: cover;
        max-height: 126px;
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
    const [uploadedImg, setUploadedImg] = useState([]);
    const [imgPreview, setImgPreview] = useState([]);
    const fileInputRef = useRef();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const imgUrl = useSelector((state) => state.post.img);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (uploadedImg === [] && postText === '') {
            alert('게시물을 작성해주세요');
        } else {
            console.log('submit succeed');
            history.push('/myprofile');
            dispatch(postAction.post(uploadedImg, postText));
        }
    };

    const HandlePostText = (e) => {
        setPostText(e.target.value);
        // console.log(postText);
    };

    const HandleOnchange = (e) => {
        let prevImgs = [];
        for (let index = 0; index < e.target.files.length; index++) {
            const element = e.target.files[index];
            const reader = new FileReader();
            reader.onload = function () {
                prevImgs.push(reader.result);
                setImgPreview((prev) => {
                    if (prevImgs.length <= 3) {
                        let newPreviews = prevImgs;
                        return newPreviews;
                    } else {
                        return prev;
                    }
                });
            };
            reader.readAsDataURL(element);
        }

        setUploadedImg((prev) => {
            if (prev.length < 3) {
                let newList = e.target.files;
                return newList;
            } else {
                alert('이미지는 최대 3장까지 업로드가 가능합니다.');
                return prev;
            }
        });
    };
    // useEffect(() => {
    //     for (let index = 0; index < uploadedImg.length; index++) {
    //         const file = uploadedImg[index];
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             SetImgPreview((prev) => {
    //                 let newPreviews = [...prev, reader.result];
    //                 if (newPreviews.length > 3) {
    //                     alert('이미지는 최대 3장까지 업로드가 가능합니다.');
    //                     newPreviews = newPreviews.slice(0, 3);
    //                     return newPreviews;
    //                 }
    //                 return newPreviews;
    //             });
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }, [uploadedImg]);

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
                        <article className='preview-area'>
                            {imgPreview &&
                                imgPreview.map((imgUrl) => (
                                    <li className='preview-item'>
                                        <img
                                            className='uploaded-img'
                                            src={imgUrl}
                                            alt='게시물 이미지'
                                            style={{
                                                maxWidth: '500px',
                                                maxHeight: '500px',
                                            }}
                                        />
                                    </li>
                                ))}
                        </article>
                        <UploadImgInput
                            type='file'
                            multiple='multiple'
                            name='uploadedImg'
                            id='uploadedImg'
                            accept='image/*'
                            ref={fileInputRef}
                            onChange={HandleOnchange}
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

import { React, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '@redux/actions/postAction';
import { useNavigate } from 'react-router-dom';
import { TopUploadNav } from '@components/common/nav';
import { ImgUploadBtn } from '@components/common/button';
import {
    UploadForm,
    UploadSection,
    UploadInputSection,
    UploadImgInput,
} from '@components/post/index.style';
import { MyProfileOnComment } from '@components/comment/commentInput/index.style';

function UploadPage() {
    const navigate = useNavigate();
    const [postText, setPostText] = useState('');
    const [uploadedImg, setUploadedImg] = useState([]);
    const [imgPreview, setImgPreview] = useState([]);
    const fileInputRef = useRef();
    const dispatch = useDispatch();
    const profileImg = useSelector((state) => state.auth);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (uploadedImg == [] && postText === '') {
            alert('게시물을 작성해주세요');
        } else {
            navigate('/myprofile');
            dispatch(postAction.post(uploadedImg, postText));
        }
    };

    const HandlePostText = (e) => {
        setPostText(e.target.value);
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

    return (
        <>
            <UploadForm onSubmit={onSubmitHandler}>
                <TopUploadNav />
                <UploadSection>
                    <div className='profileImg'>
                        {/* <DefaultProfileImg /> */}
                        <MyProfileOnComment src={profileImg.image} />
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

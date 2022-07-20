import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {TopUploadNav} from '../components/common/TopNav'
import { DefaultProfileImg, ImgUploadBtn,} from '../components/common/ProfileButtons'

const UploadForm = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const UploadSection = styled.section`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px;

`

const UploadInputSection = styled.section`
    /* display: flex; */
    flex-direction: column;
    
    .uploadInput{
        width: 70vw;
        height: auto;
        border: none;
    }

    .uploadInput::placeholder{
        position: absolute;
        top:0;
    }
`

const UploadImgInput = styled.input`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
`

function UploadPage(){
    const history = useHistory()
    const [uploadedImg, setUploadedImg] = useState('')
    const [imgPreview, SetImgPreview] = useState('')
    const fileInputRef = useRef()

    // const ShowImg = (e) =>{
    //     setUploadedImg(URL.createObjectURL(e.target.files[0]))
    //     console.log('showing img!!');
    // }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        console.log('submit succeed')
        history.push('/myprofile')
    }
    useEffect(()=>{
        if (uploadedImg){
            const reader = new FileReader()
            reader.onloadend=()=>{
                SetImgPreview(reader.result)
            }
            reader.readAsDataURL(uploadedImg)
        } else {
            SetImgPreview(null)
        }
    }, [uploadedImg])
    return(
        <>
            <UploadForm onSubmit={onSubmitHandler}>
                <TopUploadNav/>
                <UploadSection>
                    <div className='profileImg'>
                        <DefaultProfileImg/>
                    </div>
                    <UploadInputSection>
                        <textarea className='uploadInput' placeholder='게시글 입력하기...' rows={10}/>
                        {imgPreview && 
                        <img className='uploaded-img' src={imgPreview} alt="게시물 이미지" style={{maxWidth: '500px', maxHeight:'500px'}}/>}
                        <UploadImgInput 
                        type="file"
                        multiple 
                        name="uploadedImg" id="uploadedImg" accept="image/*" 
                        ref={fileInputRef}
                        onChange={e=>{
                            const file = e.target.files[0]
                            if (file){
                                setUploadedImg(file)
                                console.log('image set!');
                            } else {
                                setUploadedImg(null)
                            }
                        }}
                        />
                        <ImgUploadBtn htmlFor="uploadedImg"onClick={e=>{
                            e.preventDefault()
                            fileInputRef.current.click()
                        }} />
                    </UploadInputSection>
                </UploadSection>
            </UploadForm>
        </>
    )
}

export default UploadPage
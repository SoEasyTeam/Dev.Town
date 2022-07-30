# 주니어 개발자들의 커뮤니티 데브타운

### [배포 URL]

- URL: [주니어 개발자들의 커뮤니티 데브타운](https://spontaneous-cuchufli-e25085.netlify.app/)
- 테스트 계정
  - `ID`: devtown@test.com
  - `PassWord`: 123456

<div align="center">
  
<h1>📍 프로젝트 소개</h1>
  
</div>

```
😈 데브타운은 developer's town의 약자로, 더 나은 개발자로서 성장하기 위한 주니어 개발자들의 커뮤니티 플랫폼입니다.

💪🏻 개발자들이 모여 다양한 정보를 자유롭게 공유하면서 함께 성장 할 수 있는 환경을 제공합니다. 

🥰 주니어로서 겪을 수 있는 문제들에 대해 서로 공유하고 공감하며 같이 해결해 나갈 수 있습니다.

📚 개발 관련 상품을 판매할 수 있습니다.
```

<br>
<div align='center'>
  
<h1>팀원 소개</h1>

|                                                         **조다희**                                                         |                                                               **임다현**                                                               |                                                  **추경훈**                                             
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
|                     <img src="https://user-images.githubusercontent.com/74031552/180374703-22c36d16-5a0f-4cb8-8f94-e35b9aee6167.png" height=180 width=180>                     |                           <img src="https://user-images.githubusercontent.com/74031552/180374979-0d57af54-87a4-4d0d-a318-f92aa5f831e9.png" height=180 width=180>                           |              <img src="https://user-images.githubusercontent.com/74031552/180374844-9ca5abad-6ad9-4ea0-9420-405519e9e14c.png" height=180 width=180>                         |
|  **blog**: [daheejo](https://daheejo.tistory.com/) </br> **github**: [daheejo](https://github.com/daheejo)  |                  **blog**: [Dayhun](https://velog.io/@dayhun) </br> **github**: [Dayhun](https://github.com/Dayhun)                   |          **blog**: [chuhoon](https://blog.naver.com/khchu1220) </br> **github**: [chuhoon](https://github.com/chuhoon)       |
| ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![](https://img.shields.io/badge/-Team%20leader-green) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Functional%20Design](https://img.shields.io/badge/Functional%20Design-f8b62d) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![](https://img.shields.io/badge/-Design-orange) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Planning](https://img.shields.io/badge/-Planning-f67280) |

</div>

<br>

<div align="center">

<h1>역할 분담</h1>
  
</div>

## 👩🏻‍💻 조다희 

###### 기능
- 게시물 업로드 
- 게시물 상세 확인 
- 댓글 작성 
- 잘못된 경로일 경우 404 에러 페이지 라우팅
- 유저 검색  

<br>

## 👩🏻‍💻 임다현 - `ㅇㅇㅇㅇ`

- 개인 프로필 
- 상대 프로필 
- 프로필 수정 
- 상품 삭제

*사용 API*
  - 이미지 API (한 개의 이미지)
  - 유저 API (회원가입 / 로그인 / 이메일 검증 / 전체 유저 목록(개발용) / 계정검증)
  - 프로필 (프로필 수정 / 개인 프로필 / 팔로우 / 언팔로우 / 팔로우 리스트 / 팔로잉 리스트)
  - 상품 (상품 리스트 / 상품 상세)
  - 상품 삭제
<br>

## 🧑🏻‍💻 추경훈 - `ㅇㅇㅇㅇ`
- 로그인 
- 회원가입 
- 프로필 설정 
- 홈 피드리스트 
- 판매 상품 등록, 수정, 삭제

*사용 API*
  - 이미지 API (한 개의 이미지)
  - 유저 API (회원가입 / 로그인 / 이메일 검증 / 전체 유저 목록(개발용) / 계정검증)
  - 상품 (상품 리스트 / 상품 상세 / 상품 등록 / 상품 수정 / 상품 삭제 )
  - 프로필 설정


<br>
<div align="center">

<h1>⚙️ 개발 환경</h1>

### [기술]

###### - Front-End
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
###### - Back-End: 제공된 API 사용
###### - Deployment: Netlify

</br>

<div align="center">
  
<h1>📁 파일 구조</h1>  

</div>


```
📦 src
 ┣ 📂 assets
 ┣ 📂 pages
 ┃ 📂 redux
 ┃ ┣ 📂 actions
 ┃ ┣ 📂 reducers
 ┃ ┗ 📜 store.js
 ┣ 📂 components
 ┃ ┣ 📂 common
 ┃ ┃ ┣ 📂 alert
 ┃ ┃ ┣ 📂 button
 ┃ ┃ ┣ 📂 HomeImgPost
 ┃ ┃ ┣ 📂 modal
 ┃ ┃ ┣ 📂 nav
 ┃ ┃ ┣ 📂 PostInDetail
 ┃ ┃ ┣ 📂 product
 ┃ ┃ ┣ 📂 search
 ┃ ┃ ┣ 📂 tabMenu
 ┃ ┃ ┗ 📂 textActiveInput
 ┃ ┣ 📂 error
 ┃ ┣ 📂 home
 ┃ ┃ ┣ 📂 HomeFeed
 ┃ ┃ ┗ 📂 HomeNoFollower
 ┃ ┣ 📂 join
 ┃ ┃ ┣ 📂 JoinMemberShip
 ┃ ┃ ┗ 📂 ProfileSetting
 ┃ ┣ 📂 list
 ┃ ┃ ┣ 📂 chatList
 ┃ ┃ ┗ 📂 followList
 ┃ ┣ 📂 information
 ┃ ┃ ┣ 📂 InformationCard
 ┃ ┃ ┗ 📂 InformationContainer
 ┃ ┣ 📂 join
 ┃ ┃ ┣ 📂 JoinMember
 ┃ ┃ ┗ 📂 JoinProfile
 ┃ ┣ 📂 login
 ┃ ┃ ┣ 📂 LoginMain
 ┃ ┃ ┣ 📂 LoginOptions
 ┃ ┃ ┗ 📂 Splash
 ┃ ┣ 📂 post
 ┃ ┣ 📂 product
 ┃ ┃ ┣ 📂 AddProduct
 ┃ ┃ ┗ 📂 ProductModification
 ┃ ┗ 📂 profile
 ┃   ┣ 📂 userPost
 ┃   ┣ 📂 userProduct
 ┃   ┗ 📂 userProfile
 ┣ 📜 App.jsx
 ┗ 📜 index.js

```
<br>

<div align="center">

<h1>🎞 프로젝트 진행</h1>
  <img src ='https://user-images.githubusercontent.com/74031552/181871503-de06c2eb-0e56-4c0e-8a5b-a74b4eeae162.png'>

### [협업]
- DevTown 회의, 회고: [게더타운](https://app.gather.town/app/T09wCurdXgLi1Cmp/so-easy)
- Documentation: [데브타운 노션](https://github.com/SoEasyTeam/Dev.Town)
- Conference: [회의록](https://github.com/SoEasyTeam/Dev.Town/wiki/22-07-07-%ED%9A%8C%EC%9D%98%EB%A1%9D)
- Coding Convention: [코딩 컨벤션](https://github.com/SoEasyTeam/Dev.Town/wiki/Code-Convention)
<div align="center">

<h1>구현 기능</h1>
  
</div>

<div align='center'>

|                                                            0.splash                                                            |                                                           1.회원가입                                                           |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                            2.로그인                                                            |                                                            3.홈화면                                                            |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                          4.계정 검색                                                           |                                                           5. 소식                                                           |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                         6.마이 프로필                                                          |                                                      6-1.마이 프로필 수정                                                      |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                          7.상품 등록                                                           |                                                       7-1.상품 등록 수정                                                       |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                         8.게시글 등록                                                          |                                                      8-1.게시글 등록 수정                                                      |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                        9.팔로우, 팔로워                                                        |                                                         10.유저 프로필                                                         |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                      11.게시글 댓글, 삭제                                                      |                                                         12.게시글 신고                                                         |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

|                                                       13.상품 댓글, 삭제                                                       |                                                          14.상품 신고                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="" width="300"/> |

<br>
<br>
  
</div>

<div align="center">
<h1>🔑 핵심 코드 설명 </h1>
</div>
## ✅ `각자 하나씩 쓰기`
```
- 
- 
```
<br>
## ✅ `각자 하나씩 쓰기`
```
- 
- 
```
<br>
## ✅ `각자 하나씩 쓰기`
```
- 
- 
```
<br>
<div align="center">
<h1> ⚠️ 개발하며 겪은 이슈 </h1>

</div>


##### ✅ `트러블슈팅` 게시물 업로드 기능에서 이미지 미리보기와 서버 전송 


- Blob, FileReader, FormData 객체의 이해
- FormData 객체 생성 후 이미지 url을 넣어 서버로 보내는 작업 
[시도]
- 이미지를 서버에 업로드하는 액션과 포스트하는 액션을 따로 설정 <br> => 오히려 코드의 복잡도가 올라가고 그다지 효율적이지 않아 postAction 이라는 하나의 함수로 dispatch 설정
2. 


```js
function UploadPage() {
    const [postText, setPostText] = useState('');
    const [uploadedImg, setUploadedImg] = useState([]);
    const [imgPreview, setImgPreview] = useState([]);

    //중략

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (uploadedImg === [] && postText === '') {
            alert('게시물을 작성해주세요');
        } else {
            history.push('/myprofile');
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
            const reader = new FileReader(); //file을 비동기로 읽기 위한 FileReader 객체를 생성
            reader.onload = function () { //FileReader가 이미지를 잘 인코딩하고 난 후의 결과를 처리
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
};
// 이전 코드: 이미지 미리보기 로직과 이미지 url 만드는 로직을 useEffect 안에다 작성하여 코드가 제대로 동작이 안됨.
// useEffect(() => {
//         for (let index = 0; index < uploadedImg.length; index++) {
//             const file = uploadedImg[index];
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 SetImgPreview((prev) => {
//                     let newPreviews = [...prev, reader.result];
//                     if (newPreviews.length > 3){
//                         alert('이미지는 최대 3장까지 업로드가 가능합니다.')
//                         newPreviews = newPreviews.slice(0,3)
//                         return newPreviews
//                     }
//                     return newPreviews;
//                 });
//             };
//             reader.readAsDataURL(file);
//             const formData = new FormData()
//             formData.append('image',file)
//             console.log(formData);
//         }
//     }, [uploadedImg]);

//후략
```
<br>

##### ✅ `트러블슈팅이나 협업시 같이 해결한 문제 쓰기 2`
```
- 
- 
- 
- 
- 
- 
- 
```

<br>


##### ✅ `트러블슈팅이나 협업시 같이 해결한 문제 쓰기 3`
```
- 
- 
- 
- 
- 
- 
- 
```
<br>




<div align="center">
  
<h1>♻️ 추후 보완할 부분</h1>  
</div>
1. 아직 완성 못한 기능 구현
<br>

```
- 팔로우 / 언팔로우
- 좋아요 
- 채팅
- 계정 검색 후 해당 계정으로 이동 
- 게시물 수정
- 신고하기 
```
<br>
2. 컴포넌트의 아토믹화
<br>
3. 반복되는 코드를 없애고 커스텀훅, 모듈 제작하여 적용
<br>
4. 리렌더링 최소화
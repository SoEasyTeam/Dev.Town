# 주니어 개발자들의 커뮤니티 데브타운

### 멋쟁이사자처럼 프론트엔드스쿨 2기 TEAM 참쉽조잉🤷‍♀️

### [배포 URL]

-   URL: [https://dev-town.vercel.app/](https://dev-town.vercel.app/)
-   계정
    -   `ID`: devtown@test.com
    -   `PassWord`: 123456

<div align="center">
  
<img alt="스크린샷 2022-07-30 오후 3 56 20" src="https://user-images.githubusercontent.com/82689971/181878937-91288f5e-b6df-49ee-937e-42b87452cf12.png">

<br>
  
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
  
<h1>팀원 소개 및 역할 분담</h1>

|                                                               **조다희**                                                               |                                                               **임다현**                                                                |                                                               **추경훈**                                                               |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/74031552/180374703-22c36d16-5a0f-4cb8-8f94-e35b9aee6167.png" height=180 width=180> | <img src="https://user-images.githubusercontent.com/82689971/181879561-ea00bf01-07ec-4cdc-8bcd-b6dd2b4cba6f.jpeg" height=180 width=180> | <img src="https://user-images.githubusercontent.com/74031552/180374844-9ca5abad-6ad9-4ea0-9420-405519e9e14c.png" height=180 width=180> |
|               **blog**: [daheejo](https://daheejo.tistory.com/) </br> **github**: [daheejo](https://github.com/daheejo)                |                   **blog**: [Dayhun](https://velog.io/@dayhun) </br> **github**: [Dayhun](https://github.com/Dayhun)                    |             **blog**: [chuhoon](https://github.com/chuhoon) </br> **github**: [chuhoon](https://github.com/chuhoon)              |
|                                       ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)                                        |                                        ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)                                        |                                       ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)                                        |

</div>

<br>

## 👩🏻‍💻 조다희 - `팀리더 및 문서화`

-   공통 컴포넌트 제작 (버튼, alert창)
-   게시물 업로드
-   게시물 상세 확인
-   댓글 작성
-   잘못된 경로일 경우 404 에러 페이지 라우팅
-   유저 검색

<br>

## 👩🏻‍💻 임다현 - `프로젝트 기획 및 디자인`

-   공통 컴포넌트 제작 (nav, modal창)
-   데브 타운 아이디어 기획 및 아이콘 디자인
-   개인 프로필 페이지
-   상대 프로필 페이지
-   팔로우 / 언팔로우 기능 구현
-   프로필 수정
-   nav 및 모달창 구현

<br>

## 🧑🏻‍💻 추경훈 - `API 통신 및 Redux 환경 구축`

-   공통 컴포넌트 제작 (Auth 인풋, 탭 메뉴, 검색창, 팔로우, 이미지포스트, 상품창)
-   로그인
-   회원가입
-   프로필 설정
-   토큰 검증
-   홈 피드리스트
-   판매 상품 등록, 수정, 삭제

<br>
<div align="center">
<h1>⚙️ 개발 환경</h1>
</div>

### [기술]

##### - Front-End

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

##### - Back-End: 제공된 API 사용

##### - Deployment: `Heroku`

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

<h1>📋 프로젝트 진행</h1>
  <img src ='https://user-images.githubusercontent.com/74031552/181871503-de06c2eb-0e56-4c0e-8a5b-a74b4eeae162.png'>
</div>
   
### [협업]

-   DevTown 회의, 회고: [게더타운](https://app.gather.town/app/T09wCurdXgLi1Cmp/so-easy)
-   Documentation: [데브타운 노션](https://github.com/SoEasyTeam/Dev.Town)
-   Github-Wiki: [회의록](https://github.com/SoEasyTeam/Dev.Town/wiki/22-07-07-%ED%9A%8C%EC%9D%98%EB%A1%9D)
-   Coding Convention: [코딩 컨벤션](https://github.com/SoEasyTeam/Dev.Town/wiki/Code-Convention)

<br>

<div align="center">
<h1>🎞 구현 기능</h1>

</div>

<div align='center'>

|                                                           0. splash                                                            |                                                          1. 회원가입                                                           |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182021870-3cd5c981-9730-47d5-ac05-17a571f48263.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182022928-0eb992ed-a13a-4dc5-969e-99c2ddedb42f.gif" width="300"/> |

|                                                         2. 프로필 설정                                                         |                                                           3. 로그인                                                            |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182022982-39bdbf6b-d248-428d-8933-f91720358d44.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182031026-72b72f10-bef6-48e9-a85c-23b74d3b01fa.gif" width="300"/> |

|                                                           4. 홈화면                                                            |                                                          5. 계정 검색                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182031235-be2c998c-fb33-4b47-98fa-d7d725db09be.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/186165520-28cc73b3-1f36-4299-a250-e919749c47dc.gif" width="300"/> |

|                                                            6. 채팅                                                             |                                                          7. 내 프로필                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182037663-ade91674-9ba2-4345-a5d2-9dfbdf04a816.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182031732-7d0a4931-2c67-4565-8a78-b3fb17c79bc2.gif" width="300"/> |

|                                                       8. 내 프로필 수정                                                        |                                                          9. 상품 등록                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182031911-c97f1a38-5600-49a1-b543-40799d270985.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182032375-c3f64a70-c987-44cf-b3b5-d94e3f380d49.gif" width="300"/> |

|                                                        10. 내 상품 수정                                                        |                                                        11. 내 상품 삭제                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182032579-e0064495-51c3-47e4-970b-f3bf6601aa3e.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182035684-9eae944d-85b5-4642-99a3-514dfe30dacc.gif" width="300"/> |

|                                                     12. 내 상품 링크 이동                                                      |                                                       13.팔로우, 팔로워                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182032920-8dc967cc-a100-4d6e-aefb-2f7bd66c599b.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/185943025-39033397-40f3-464b-a901-2facae4c8ca5.gif" width="300"/> |

|                                                        14. 게시글 등록                                                         |                                                      15. 게시글 댓글 등록                                                      |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182036546-92b74da6-45ab-4e97-9e55-f060b2eb439b.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182033537-61266d47-83d3-4e91-8c27-7946c57e91e1.gif" width="300"/> |

|                                                        16. 상대 프로필                                                         |                                                      17. 상대 게시글 신고                                                      |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182033634-2d4a00a1-6224-4423-b778-bbb89d502081.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182033759-88b13db7-0916-4776-8e72-121f58b04b33.gif" width="300"/> |

|                                                 18. 상대 상품 클릭시 링크 이동                                                 |                                                      19. 설정 및 로그아웃                                                      |
| :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/82689971/182033847-b58fa02c-60af-4f6e-bf6a-411ecafddf9b.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/82689971/182035763-8086894c-5192-44c2-bd38-b78e7a982b08.gif" width="300"/> |

<br>
  
</div>

<div align='center'>
<h1> ⚠️ 개발하며 겪은 이슈 </h1>
</div>

## ✅ `Redux 및 Redux-Persist 적용 이슈`

```
- 팀원 모두 리덕스를 잘 모르는 상태에서 사용하려다보니, 리덕스에 대해 공부하고 적용하기까지 시간이 많이 소요되었습니다.
- Live Share와 게더타운을 이용한 페어프로그래밍을 통해, 리덕스를 적용하여 코드를 작성하였습니다.
- 이해한 내용을 주석으로 작성하여, 리덕스 활용시 쉽게 이해할 수 있도록 하였습니다.
- Redux-Persist를 사용해 새로고침이나 웹을 종료해도 store가 리셋되는 것을 방지하고 싶었지만
  적용을 해도 계속해서 데이터가 휘발되는 이슈가 있었습니다.
- 또한 특정한 reducer에만 데이터를 사용하고 싶은 경우 persistConfig에 whitelist를 설정해 넣어줬지만
  데이터가 휘발되어 현재는 Redux-Persist를 사용하지 않고 sessionStorage를 통해 새로고침을 방지하고 있습니다.
```

<div align='center'>
<img src="https://user-images.githubusercontent.com/82689971/181918721-eb7c221e-2dfb-4351-8344-0c67f4800d80.png" height=250>
<img height="250" alt="스크린샷 2022-07-30 오후 11 29 07" src="https://user-images.githubusercontent.com/82689971/181918896-cdf05c31-731b-4d02-9ab1-971942f2d44a.png">
</div>
<br>

## ✅ `트러블슈팅; 게시물 업로드 기능에서 이미지 미리보기와 이미지 url서버 전송`

### [문제]

이미지 프리뷰가 뜨면 서버로 전송이 안되고, 반대로 서버로 전송이 되면 프리뷰가 보이지 않음.
<br>

### [해결 과정]

-   이미지를 서버에 업로드하는 액션과 포스트하는 액션을 따로 설정

    => 오히려 코드의 복잡도가 올라가고 그다지 효율적이지 않아 postAction 이라는 하나의 함수로 dispatch 설정

-   useEffect 안에서 formData와 fileReader를 동시에 만들어서 감시하도록 했지만 useEffect 코드를 제거하고 formData 관련 코드를 리덕스의 액션함수 파일로 이동

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
            reader.onload = function () {
                //FileReader가 이미지를 잘 인코딩하고 난 후의 결과를 처리
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
}
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

```js
function post(fileList, postText) {
    const formData = new FormData();

    if (fileList.length > 0) {
        for (let index = 0; index < fileList.length; index++) {
            const file = fileList[index];
            formData.append('image', file);
    }
    //formData 처리 후 이미지업로드 요청
    return async (dispatch, getState) => {
        let url = 'https://mandarin.api.weniv.co.kr';
        const reqPath = '/image/uploadfiles';
        const token = getState().auth.token;
        console.log(token);
        try {
            let imageUrls = ''
            if (fileList.length >0){
                let fileRes = await fetch(url + reqPath, {
                    method: 'POST',
                    body: formData,
                });
                const fileJson = await fileRes.json();
                imageUrls = fileJson
                .map((fileData) => url + '/' + fileData.filename)
                .join(',');

            }
            //게시물 포스트 요청
            const postReq = '/post';

            let postRes = await fetch(url + postReq, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    post: {
                        content: postText,
                        image: imageUrls,
                    },
                }),
            });

//후략

```

<br>

<div align="center">

<h1>♻️ 보완할 부분</h1>

</div>

```
1. 아직 구현하지 못한 기능
    - 채팅 기능
    - 신고하기 기능
    - 게시물 수정 및 삭제
    - 상품/게시물 수정시 리렌더링
    - Redux-Persist

2. 컴포넌트의 아토믹화

3. 중복되는 코드를 없애고 커스텀훅 모듈 제작

4. 리렌더링 최소화
```

# 주니어 개발자들의 커뮤니티 데브타운

### [배포 URL]

-   URL: [주니어 개발자들의 커뮤니티 데브타운](https://spontaneous-cuchufli-e25085.netlify.app/)
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
  
<h1> 👥 팀원 소개 </h1>

|                                                               **조다희**                                                               |                                                                **임다현**                                                                 |                                                                **추경훈**                                                                 |
| :------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/74031552/180374703-22c36d16-5a0f-4cb8-8f94-e35b9aee6167.png" height=180 width=180> |  <img src="https://user-images.githubusercontent.com/82689971/181879561-ea00bf01-07ec-4cdc-8bcd-b6dd2b4cba6f.jpeg" height=180 width=180>  |  <img src="https://user-images.githubusercontent.com/74031552/180374844-9ca5abad-6ad9-4ea0-9420-405519e9e14c.png" height=180 width=180>   |
|               **blog**: [daheejo](https://daheejo.tistory.com/) </br> **github**: [daheejo](https://github.com/daheejo)                |                    **blog**: [Dayhun](https://velog.io/@dayhun) </br> **github**: [Dayhun](https://github.com/Dayhun)                     |               **blog**: [chuhoon](https://blog.naver.com/khchu1220) </br> **github**: [chuhoon](https://github.com/chuhoon)               |
|            ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![](https://img.shields.io/badge/-Team%20leader-green)            | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Functional%20Design](https://img.shields.io/badge/Functional%20Design-f8b62d) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Functional%20Design](https://img.shields.io/badge/Functional%20Design-f8b62d) |

</div>

<br>

<div align="center">

<h1>👤 역할 분담</h1>
  
</div>

## 👩🏻‍💻 조다희

-   게시물 업로드
-   게시물 상세 확인
-   댓글 작성
-   잘못된 경로일 경우 404 에러 페이지 라우팅
-   유저 검색

<br>

## 👩🏻‍💻 임다현

-   데브 타운 아이디어 기획 및 아이콘 디자인
-   개인 프로필 페이지
-   상대 프로필 페이지
-   프로필 수정
-   nav 및 모달창 구현

<br>

## 🧑🏻‍💻 추경훈

-   로그인
-   회원가입
-   프로필 설정
-   홈 피드리스트
-   판매 상품 등록, 수정, 삭제

<br>
<div align="center">

<h1>⚙️ 개발 환경</h1>
  
</div>
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> 
 <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=React&logoColor=white"> 
 <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
</div>

### [기술]

-   FrontEnd: React, Redux, Redux-Thunk, Styled-components
-   BackEnd: 제공된 API 사용

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

### [협업]

</div>

-   DevTown 회의, 회고: [게더타운](https://app.gather.town/app/T09wCurdXgLi1Cmp/so-easy)
-   DevTown WorkPlace: [데브타운 노션](https://github.com/SoEasyTeam/Dev.Town)
-   Conference: [회의록](https://github.com/SoEasyTeam/Dev.Town/wiki/22-07-07-%ED%9A%8C%EC%9D%98%EB%A1%9D)
-   Coding Convention: [코딩 컨벤션](https://github.com/SoEasyTeam/Dev.Town/wiki/Code-Convention)
<div align="center">

<h1>🎞 구현 기능</h1>
  
</div>

<div align='center'>

|         0.splash          | 1.회원가입 |
| :-----------------------: | :--------: |
| <img src="" width="300"/> |

|         2.로그인          | 3.홈화면 |
| :-----------------------: | :------: |
| <img src="" width="300"/> |

|        4.계정 검색        | 5. 소식 |
| :-----------------------: | :-----: |
| <img src="" width="300"/> |

|       6.마이 프로필       | 6-1.마이 프로필 수정 |
| :-----------------------: | :------------------: |
| <img src="" width="300"/> |

|        7.상품 등록        | 7-1.상품 등록 수정 |
| :-----------------------: | :----------------: |
| <img src="" width="300"/> |

|       8.게시글 등록       | 8-1.게시글 등록 수정 |
| :-----------------------: | :------------------: |
| <img src="" width="300"/> |

|     9.팔로우, 팔로워      | 10.유저 프로필 |
| :-----------------------: | :------------: |
| <img src="" width="300"/> |

|   11.게시글 댓글, 삭제    | 12.게시글 신고 |
| :-----------------------: | :------------: |
| <img src="" width="300"/> |

|    13.상품 댓글, 삭제     | 14.상품 신고 |
| :-----------------------: | :----------: |
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

## ✅ `Live Share, Gather를 통한 협업과 문제 해결력`

```
- 각자 기능 구현시 발생한 에러를 해결하기 위해 팀원들과 Live Share 기능을 통해 페어프로그래밍을 진행했습니다.
- Live Share를 하면서 서로의 코드 공유를 통해, 혼자라면 어려웠을 문제점을 함께 고민하고 해결하였습니다.
- 또한, 매일 게더에 모여 함께 코딩을 진행했습니다.
- 온라인이더라도 함께 하면서 서로의 열정과 의지를 보이며 나아갈 수 있었습니다.
- 문제가 생기거나 의견이 생기면, 즉각적으로 소통할 수 있는 환경을 만들어 원활한 협업을 진행했습니다.
```

<br>

## ✅ `트러블슈팅이나 협업시 같이 해결한 문제 쓰기 2`

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

## ✅ `깃허브를 통한 협업 도전과 성장`

```
- Git을 실전으로 사용해 부딪혀 보며 명령어를 자연스럽게 익히게 되었습니다.
- Git-flow 전략을 간단하게 살펴보고 우리에 맞는 Git-flow 규칙을 만들어 활용했습니다.
- 한 번에 하나의 기능만 있는 Commit을 작성해야 한다는 것을 깨달았습니다. 코드를 수정해야 할 때 기능 하나씩 Commit을 하지 않았을 경우 원치 않은 코드까지 날아가기 때문입니다.
- 풀 리퀘스트 시에 코드 리뷰를 통해 서로를 피드백하며 코드를 개선하는 과정을 가졌습니다. 코드 리뷰를 통해 스타일링을 통일하고 장애를 사전에 예방하였습니다.
- 풀 리퀘스트 conflict 발생 시 해결 능력이 생겼습니다.
```

<br>

<div align="center">
<h1>♻️ 보완할 부분</h1>  
</div>

```
- 팔로우 / 언팔로우 기능
- 좋아요 기능
- 채팅 기능
- 계정 검색 후 해당 계정으로 이동 기능
- 신고하기 기능
- 게시물 섹션 앨범형으로 변환
```

<br>

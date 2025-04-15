# 토리별

<div  align="center">
<img src="public/readme/main.png" alt="로고">
</div>

#### 비사이드 502 ai 포텐데이 x 네이버 Cloud에서 진행한 프로젝트입니다.

<br/>

# 📝 프로젝트 개요

**프로젝트 명:** 토리별

**프로젝트 설명:** 아이와 감정을 나누고 소통하는 새로운 방법을 제시하는 ai 채팅 서비스

**프로젝트 기간:** 2025.02.21 ~ 2025.03.12

**배포 주소:** https://toristar.site/onboarding

<br/>

## 👏 팀원

<table align="center">
    <tbody>
        <tr>
            <td>
                <a href="https://github.com/tkddbs587">
                    <img src="https://avatars.githubusercontent.com/tkddbs587" width="100px" height="100px"/>
                </a>
            </td>
            <td>
                <a href="https://github.com/ralla0405">
                    <img src="https://avatars.githubusercontent.com/u/74897495?v=4" width="100" height="100"/>
                </a>
            </td>
            <td>
                <a href="https://github.com/hyunw405">
                    <img src="https://avatars.githubusercontent.com/u/81167359?v=4" width="100px" height="100px"/>
                </a>  
            </td>
            <td>
                <div>
                    <img src="public/readme/profile1.png" width="100" height="100"/>
                </div>  
            </td>
            <td>
                <div>
                    <img src="public/readme/profile2.png" width="100px" height="100px"/>
                </div>
            </td>
        </tr>
        <tr>
            <th>
                <a href="https://github.com/tkddbs587">이영훈</a>
            </th>
            <th>
                <a href="https://github.com/ralla0405">정승환</a>
            </th>
            <th>
                <a href="https://github.com/hyunw405">백현우</a>
            </th>
            <th>
                <div>김세민</div>
            </th>
            <th>
                <div>전단비</div>
            </th>
        </tr>
        <tr>
            <th>
                FrontEnd
            </th>
            <th>
                BackEnd
            </th>
            <th>
                AI
            </th>
            <th>
                PM
            </th>
            <th>
                Designer
            </th>
        </tr>
    </tbody>
</table>

<br/>

# 🛠️ 기술 스택

## FrontEnd

  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34">

## ETC

<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESlint&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

# 🗂️ 디렉토리 구조

```
📦 Root
┣ 📂 .github                # GitHub 설정 파일 및 워크플로
┣ 📂 .husky                 # Git Hooks 설정 폴더
┣ 📂 public                 # 정적 파일 (이미지, svg 등)
┣ 📂 src                    # 소스 코드 메인 디렉토리
┃ ┣ 📂 components           # 재사용 가능한 React 컴포넌트
┃ ┣ 📂 hooks                # 커스텀 React 훅
┃ ┣ 📂 fonts                # 정적 폰트 폴더
┃ ┣ 📂 utils                # 유틸리티 함수
┃ ┃ ┗ 📂 api                # API 관련 함수
┃ ┣ 📂 app                  # Next.js app 라우터
┃ ┃ ┗ 📂 api                # API Routes
┃ ┗ 📜 middleware.ts        # Next.js 미들웨어
┣ 📜 .eslintrc.json         # ESLint 설정
┣ 📜 .prettierrc.json       # Prettier 설정
┣ 📜 Dockerfile             # Docker 파일
┗ 📜 package.json           # 프로젝트 종속성 정의
```

## 로컬 실행 커맨드

```bash
npm install # 패키지 설치

npm run dev # 웹 실행
```

<br/>

# ✨ 핵심 기능

## 1. 소셜 로그인

카카오, 네이버 소셜 로그인으로 로그인 할 수 있습니다.

<img src="public/readme/login.png" width="300px" height="550px">

## 2. "토리"와 채팅 - Naver Clova Studio AI

메인 페이지에서 **토리와 이야기 시작하기** 버튼을 클릭하여 채팅 페이지로 이동할 수 있습니다.

<br/>

채팅 페이지에서 토리에게 채팅을 입력하고 답장이 오면, **더 얘기할래** 버튼을 클릭하여 채팅을 이어갈 수 있습니다.

<br/>

![메인 페이지](public/readme/image1.png)

## 3. 대화 내용(감정) 요약 - Naver Clova Studio AI

**그만할래** 버튼을 누르면 토리와 나눈 대화 내용을 기반으로 대화 내용을 요약할 수 있습니다.
<br/>
**오늘 대화 마치기** 버튼을 누르면 토리와 나눈 대화는 별이 되어 우주에 띄워지고 별 목록 페이지에 저장됩니다.

![채팅 페이지](public/readme/image2.png)

## 4. 별 목록 저장 페이지: 채팅 요약, 전체 채팅 내용, 키워드 추출(Naver Clova Studio AI)

별 목록 저장 페이지에서 대화(감정) 요약 내용, 전체 대화 내용을 확인 할 수 있습니다.
<br/>
대화 요약 페이지에서는 요약 내용을 분석하여 감정 키워드를 추출하여 보여줍니다.

![별 목록 저장 페이지](public/readme/image3.png)

## 5. PWA를 적용하여 홈 화면에 앱 추가

Progressive Web Application을 적용하여 **모바일 홈 화면에 앱을 추가**할 수 있습니다.

#### 추가 순서

<p>
  1. 모바일 크롬 또는 사파리에서 https://toristar.site 접속<br/>
  2. 상단 주소창 우측 공유 버튼 클릭(크롬 기준)<br/>
  3. 아래로 스크롤 후 '홈 화면에 추가' 메뉴 선택
</p>
<img src="public/readme/pwa-1.PNG" width="200px" height="420px">
<img src="public/readme/pwa-2.PNG" width="200px" height="420px">

<div>
  <p>4. 우측 상단에 '추가' 버튼 선택 후 홈 화면에 pwa 앱 생성 및 실행</p>
  <img src="public/readme/pwa-3.PNG" width="200px" height="420px">
  <img src="public/readme/pwa-4.PNG" width="200px" height="420px">
</div>

## 6. push 알림

알림 설정을 허용한 유저에 한해서 **매일 오후 7시에 push 알림을 전송**합니다. 앱을 닫고 있어도 백그라운드 알림을 받을 수 있습니다.

#### 알림 허용 방법

<div>
  <p>
    1. 메인 페이지 좌측 상단 알림 버튼 클릭<br/>
    2. 알림 모달에서 허용 선택<br/>
    3. 오후 7시 push 알림 수신
  </p>
  <img src="public/readme/push-1.jpg" width="200px" height="420px">
  <img src="public/readme/push-2.jpg" width="200px" height="420px">
  <img src="public/readme/push-3.JPG" width="200px" height="420px">
</div>

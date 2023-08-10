# NodeJS 서버와 연동되는 React Client

## react의 실행 port 변경

- NodeJS 서버와 React 개발환경의 Server의 실행 port가 모두 3000으로 서로 겹치는 관계로 여러 문제를 일으킬 수 있다.
- NodeJS 에서 Port를 변경할 수도 있지만, React의 실행 스크립트를 변경하여 Port를 변경하자
- `package.json` 파일의 다음 start 스크립트 설정을 변경한다.

```json
// 원래 start 스크립트
"start": "react-scripts start",

// 윈도우 환경
// Port를 5000으로 변경하면 start하는 스크립트로 변경
"start": "set PORT=5000 && react-scripts start",

// linux, mac 환경
"start": "export PORT=5000 && react-scripts start",
```

## NodeJs Server와 연동해서 CORS 오류를 방지하기 위한 설정

- `package.json`에 다음 항목 추가

```json
//변경 전 코드
"private": true,
"dependencies": {

}

// 추가된 코드
"private": true,
"proxy": "http://localhost:3000/",
"dependencies": {

}
```

# react 프로젝트 node 프로젝트에 빌드하기

- react 프로젝트를 node 프로젝트 폴더로 이동
- react 프로젝트를 원하는 이름으로 변경 : react-client
- node의 bin/app.js의 다음항목을 변경

```js
// 기존 코드
app.use(express.static(path.join("public")));

// React Build 폴더를 static으로 지정하기
app.use(express.static(path.join("react-client/build")));
```

- react 프로젝트 폴더를 터미널로 열고 `npm run build` 실행
- 이렇게 설정하면 NodeJS의 'http://localhost:3000/'을 열면 react의 초기 화면이 열린다
- React의 코드를 변경하면, 반드시 다시 build를 실행해주어야 한다.

## React의 시작 방법 변경

- 기존의 React 시작 방법 : `npm run start`
- 새로운 React 시작 방법 : `nodemon --exec "react-script build"`
- 단 이 방법은 기존의 React Hot Loading 기능을 사용하기 어렵다
- 때문에 기존의 Hot Loading 방법을 사용하려면 또하나의 터미널을 열고 `npm run start`를 실행해 준다.
- 기본 상태에서는 nodemon이 계속 재 시작한다. nodemon 현재 react-client 폴더에 있는 어떤 파일이라도 변경이 되면 자동 재시작된다. nodemon의 실행을 다소 제한할 필요가 있다

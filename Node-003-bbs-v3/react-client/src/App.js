import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import { hello } from "./modules/FetchModule";
import NavList from "./layout/NavList";
import { Outlet } from "react-router-dom";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될 때 작동되도록 event 핸들러 등록
  // 두번째 파라미터를 빈(blank) 배열 ([])로 추가하면
  // Effect()에 의해 실행할 함수는 화면이 rendering된 후 한번만 실행된다.
  // useEffect(()=> { 실행할 함수 }, [])

  // useEffect(async () => {
  //   setTitle(await hello());
  // }, []);

  // hello() 함수는 await 를 부착하여 결과를 기다려야 하는 함수
  // 이 함수에 await 를 부착하기 위해서는 이 함수를 감싸는 함수에 async 를 부착하여야 한다
  // useEffect(() => {
  //   const fetchTitle = async () => {
  //     setTitle(await hello());
  //   };
  //   fetchTitle();
  // }, []);
  // useEffect() 첫번째 함수에는 async 를 부착할 수 없다

  // 즉시 실행 함수로 만들기
  // 익명함수 호추방식
  // 생성된 함수를 바로 사용하기
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "React BBS Project"}</p>
      </header>

      <NavList />
      {/* <BBsMain /> */}
      {/* Router 에서 children 으로 설정된 component 가 표시되는 위치 Outlet*/}
      <Outlet />
    </div>
  );
}

export default App;

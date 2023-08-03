import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./comps/Input";

function App() {
  // int sum = sum(30, 40);
  const [count, setCount] = useState(0);

  // 화면에 표시되어야한다면 useState 사용
  // let count = 0;

  const clickHandlerIncre = () => {
    // count = count + 1;
    setCount(count + 1);
    // p tag 에 표시된 count 값이 변화되었으니
    // p tag 에 값을 표시하라
  };

  const clickHandlerDecre = () => {
    // count = count - 1;
    // state 사용시 자기자신 변경불가
    setCount(count - 1);
    // p tag 에 표시된 count 값이 변화되었으니
    // p tag 에 값을 표시하라
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        {/* <div onClick={() => setCount(count + 1)}>카운터 증가</div> */}
        <div onClick={clickHandlerIncre}>카운터 증가</div>
        <div onClick={clickHandlerDecre}>카운터 감소</div>
        <Input />
      </header>
    </div>
  );
}

export default App;

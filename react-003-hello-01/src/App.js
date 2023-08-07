import sigong from "./sigong.png";
import Cal from "./comp/Cal.js";
import Input from "./comp/Input";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  // const [nums, setNums] = useState("");
  // input 해야할 대상이 2개 이상일때는 JSON 객체로 선언하자
  // const [nums, setNums] = useState({ num1: 0, num2: 0 });

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setNums({ ...nums, [name]: value });
  // };

  // Input Comp 에는 데이터를 저장할 nums 객체와
  // nums 객체의 데이터를 변경할 setNums 함수를 같이 전달하고
  // Result Comp 는 데이터를 읽어서 표현만 할 것이므로
  // nums 객체만 전달한다
  return (
    <div className="App">
      <header className="App-header">
        <img src={sigong} className="App-logo" alt="logo" />
      </header>
      <Input value={inputValue1} onChange={handleInputChange1} />
      <Input value={inputValue2} onChange={handleInputChange2} />
      <Cal value1={inputValue1} value2={inputValue2} />
    </div>
  );
}
export default App;

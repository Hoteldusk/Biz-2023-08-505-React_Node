import "../css/Cal.css";
// 부모 Comp 에서 전달받은 값의 개수가 제한적일떄는
// 함수의 매개변수에서 즉시 구조분해가 가능하다
function Cal({ value1, value2 }) {
  // const {num1, num2} = nums;

  // const [intNum1, intNum2] = [Number(num1), Number(num2)];

  // 위 코드는 다음과 같다
  // const intNum1 = Number(num1);
  // const intNum2 = Number(num2);

  // let minNum = 0;
  // let maxNum = 0;

  // if (value1 > value2) {
  //   maxNum = value1;
  //   minNum = value2;
  // } else if (value2 > value1) {
  //   maxNum = value2;
  //   minNum = value1;
  // }

  const [minNum, maxNum] =
    value1 > value2 ? [value2, value1] : [value1, value2];

  const sum = Number(value1) + Number(value2);
  const sub = Number(maxNum) - Number(minNum);
  const mul = Number(value1) * Number(value2);
  const div = Number(value1) / Number(value2);
  // 여기 위쪽은 Rendering 이 시작되기전에 실행되는 코드
  // nums State 가 변화되면 ArithResult 함수가 실행되고
  // return 함수를 만나기 전에 코드들을 실행하여 변수를 다시 만들고
  // 만들어진 변수값으로 화면을 Rendering 한다

  // Rendering 이 시작되는 부분
  return (
    <div class="main">
      <p>덧셈: {sum}</p>
      <p>뺄셈: {sub}</p>
      <p>곱셈: {mul}</p>
      <p>나눗셈: {div}</p>
    </div>
  );
}
export default Cal;

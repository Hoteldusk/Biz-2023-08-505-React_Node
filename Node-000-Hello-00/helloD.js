// sub.js 에서 export default 로 내보낸 함수
// 내가 필요한 아무 이름이나 지정하여 받을 수 있다
// export default 가 아닌 함수는 {함수이름} 으로 import 해야한다

// import RtMessage, { sum, sub, mul } from "./src/sub.js";

// import 를 분리한다면 처음에는 default가 먼저 import 되어야한다
import RtMessage from "./src/sub.js";
import { sum, sub, mul } from "./src/sub.js";

console.log(RtMessage());
console.log(sum(10, 20));
console.log(sub(10, 20));
console.log(mul(10, 20));

const address = [
  { 이름: "홍", 나이: "16" },
  { 이름: "김", 나이: "26" },
  { 이름: "박", 나이: "36" },
];

console.log(address);
console.table(address);
console.dir(address);
console.error(address);

/**
 * JSON 객체 (JavaScript Object Notation)
 * {key:value} 쌍으로 구성된 데이터 type
 */
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-1111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

// 변수를 이용하여 찾고싶을때
console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

const address = [
  { 이름: "김길동", 나이: "16", 전화: "1111" },
  { 이름: "박길동", 나이: "26", 전화: "2222" },
  { 이름: "홍길동", 나이: "36", 전화: "3333" },
  { 이름: "고길동", 나이: "46", 전화: "4444" },
];
console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);
address.forEach((item) => {
  console.log("이름 : " + item.이름, "나이 : " + item.나이);
});

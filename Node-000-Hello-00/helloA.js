const sum = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum];
};

const nations = ["대한민국", "우리나라"];
console.log(nations);
const [n1, n2] = nations;
console.log("n1", n1);
console.log("n2", n2);

const nation1 = nations[0];
const nation2 = nations[1];

const nations2 = [...nations, "Korea"];
console.log(nations2);

// nations 배열을 nations3 에 복사하라
const nations3 = nations;
console.log("1", nations);
console.log("3", nations3);
nations3[0] = "Republic";
console.log("1", nations);

const nations4 = [...nations];
// 전개 연산자를 통해서 복사하면 깊은복사가 이루어진다
nations4[0] = "Republic of Korea";
console.log("1", nations);

// 전개 연산자 없이 깊은복사를 구현하려면?
const nations5 = [];
for (let nation of nations) {
  nations5.push(nation);
}

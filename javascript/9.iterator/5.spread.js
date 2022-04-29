// Spread 연산자, 전개구문
// ES2018에 추가됨
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
console.log(sum(1, 2, 2, 4, 2, 3, 2, 2));

// Array Concat 활용
const num_1 = [1, 2];
const num_2 = [3, 4];
let arr = num_1.concat(num_2);
console.log(arr);
arr = [...num_1, 100, ...num_2];
console.log(arr);

//Object
const ellie = { name: "Ellie", age: 20, hoem: { address: "home" } };
const updated = {
  ...ellie,
  age: 30,
  job: "s/w engineer",
};
console.log(ellie);
console.log(updated);

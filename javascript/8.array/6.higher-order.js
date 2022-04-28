//입급객체
// 일반객체 처럼 모든 연산이 가능한 것
// * 함수의 배개변수로 전달이 가능
// * 함수의 Return값으로 전달 가능
// * 할당 명령문 가능
// * 동일 비교 대상 가능

//일급함수
// 함수가 일반객체처럼 모든 연산이 가능한 것
// * 함수의 배개변수로 전달이 가능
// * 함수의 Return값으로 전달 가능
// * 할당 명령문 가능
// * 동일 비교 대상 가능

// 고차함수 Higher-order function
// * 인자로 함수를 받거나(콜백함수)
// * 함수를 반환하는 함수를 고차함수라고 합니다.

//함수형 프로그래밍 : 어떤 특정한 일을 하는 함수형끼리 서로 엮거나 묶는 방식으로 코딩하는 것
// 순수함수를 묶어 놓는 것
// 데이터를 변경 ❌
// 변수 사용 ❌
// 조건문 ❌
// 반복문 ❌

//순수함수 : 함수 내에서 불변성을 유지하는 것. 즉, 함수안에서 전달받은 매개변수나 또는 함수밖에있는
// 특수한 상태를 함수내부에서 수정하지 않고 전달받은 인자를 바탕으로 연산을 한다음 새로운 값을 반환하는 것.
// SideEffect 이 없는 것

const fruits = ["🍌", "🍓", "🍇", "🍓"];

// .forEach(callbackfn) 배열을 빙글 빙글 돌면서 원하는것을 할때
fruits.forEach((value, index, array) => {
  console.log("**********");
  console.log(value);
  console.log(index);
  console.log(array);
});

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🥛", price: 2 };
const item2 = { name: "🍪", price: 3 };
const item3 = { name: "🍙", price: 1 };
const product = [item1, item2, item3, item2];
let result = product.find((value) => {
  return value.name === "🍪";
});
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = product.findIndex((value) => {
  return value.name === "🍪";
});
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = product.some((item) => item.name === "🍪");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = product.every((item) => item.name === "🍪");
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = product.filter((item) => item.name === "🍪");
console.log(result);

// Map : 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  return item * 2;
});
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap :
result = nums.map((item) => [1, 2]);
console.log(result);
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ["dream", "coding"].map((text) => text.split(""));
console.log(result);
result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

//sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순(ascending order)으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);
//숫자는 문자열로 변경된 다음 정렬이됨 그래서 조심해야함
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// 콜백함수의 return이 less than 0이면, a 가 앞으로 정렬, 오름차순
// 반대로 more than 0이면, a 가 뒤로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

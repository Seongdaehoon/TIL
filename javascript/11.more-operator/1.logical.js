// 논리연산자 Logical Operator
// && And
// || Or
// 단축평가: short-circuit evaluation
const obj1 = { name: "dog" };
const obj2 = { name: "fox", owner: "Danny" };

if (obj1 && obj2) {
  console.log("둘다 true");
}

// 조건문 밖에서 논리연산자의 계산 조건은 다르다.
// &&의 경우, 앞의 값이 True일 경우, 뒤의 값을 전달하고,
// ||의 경우, 앞의 값이 True이면, 앞의 값이 전달되고, 앞의 값이 False이면 뒤의 값이 전달 될다.
let result = obj1 && obj2;
console.log(result);

result = false || obj2;
console.log(result);

// 활용예
// 조건이 truthy일때 && 무언가를 해야할 경우
// 조건이 falshy일때 || 무언가를 해야할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우 초기값이 동작함. ""텅빈 값이 전달 되면 동작 안함.
// || falshy한 경우 설정(할당)
function print(message = "hello") {
  const text = message || "hello";
  console.log(text);
}
print();
print("");
print("안녕");

// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020) 추가됨
// ?.
// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: "dog", owner: { name: "Danny" } };
function printName(obj) {
  //   const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);

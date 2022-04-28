// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// JavaScript에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign 등
const pizza = { name: "🍕", price: 2, owner: { name: "Danny" } };
const ramen = { name: "🍜", price: 3 };
const sushi = { name: "🍣", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);

store2.push(sushi);
console.log(store1);
console.log(store2);

pizza.price = 4;
console.log(store1); // 객체의 price value를 변경하였는데, 배열에도 영향을 준다
console.log(store2);

//shallow copy 실제 배열에는 각 object값이 들어있는 것이 아니라, object의 레퍼런스가 들어있음을 알 수 있다.

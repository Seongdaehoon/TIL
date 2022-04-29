// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;  T: Generic type
// 심볼 정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다! 라는 것을 의미한다.
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있어.
const array = [1, 2, 3];
console.log(array.values()); // [Array Iterator] {}가 반환됨을 확인 가능
console.log(array.entries()); // [Array Iterator] {}가 반환됨을 확인 가능
console.log(array.keys()); // [Array Iterator] {}가 반환됨을 확인 가능

// iterator 사용해 보기!
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

for (let item of array.values()) {
  console.log(item);
}

// 일반 객체는 iterable하지 않음.
// Instead, "in" 명령어를 통해서 key값을 가져올 수 있음
const obj = { id: 123, name: "danny" };
for (const key in obj) {
  console.log(key);
}

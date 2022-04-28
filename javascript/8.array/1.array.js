// 배열 생성
let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2); // Array 객체의 static 함수 of 사용
console.log(array);

const anotherArray = [1, 2, 3, 4, 5]; // 배열 literal 사용
console.log(anotherArray);
array = Array.from("text"); // 문자열읠 배열로 변경 가능
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함
// 하지만 자바스크립트에서 배열은 연속적으로 이어져 있지 않고,
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array);

/**요약
 * 배열을 반드는 방법 : Array()객체 생성, Array객체의 static method Of 또는 from 사용
 * Javascript에서의 배열은 일반적인 배열의 특성을 흉내낸 객체이다.
 * 객체 key를 순서 정하고, length를 만들면 배열이 만들어진다.
 */

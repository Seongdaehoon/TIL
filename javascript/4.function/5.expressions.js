//함수 선언문 function name() { }
//함수 표현식 const name = function () { }
// 화살표 함수 const name = () => { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b; // 값만 반환하는 statement만 있을 경우 curely bracket 및 return 생략 가능

console.log(add(1, 2));

// 생성자 함수 const Object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log("🐷");
})();

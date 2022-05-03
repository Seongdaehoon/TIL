// Scope : 범위, 영역
// * Identifier(=변수, 함수, 클래스 이름)가 유효한 범위
// * 선언된 위치에 다라 유효 범위가 결정됨
// * 예를들어, 블락({}) 안의 변수는 블럭 안에서만 유효
// * 변수는 최대한 필요한 곳에서 정의해야 겠군!
// 코드 블럭 : { }, if() { }, for() {}, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = "a";
}
const b = "b";

console.log(a); // 외부에서 접근 하면 app crashed occured.

function print() {
  const message = "Hello World";
  console.log(message);
}

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sumb(a, b) {
  console.log(a, b);
}
console.log(a, b);

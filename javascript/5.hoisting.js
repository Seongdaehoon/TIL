// Hoisting : 끌어올리다!
// Javascript Engine이 코드를 실행하기 전,
// 변수, 함수, 클래스의 Declaration Statement를 끌어 올리는 것을 말함

// 예를 들어, function을 코드 제일 아래에 선언을 해도, JS 엔진이 자동으로 코드 실
// 코드를 실행하기 전에 한번씩 주욱 보면서 각각의 렉시컬 환경을 만드는데, 그 환경의 어떤 데이터가 있는지 미리 선언을 해준다.
// 이때 function을 제일 위로 올려준다.

// 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김

// 변수 Variables : 값을 저장하는 공간, 자료를 저장할 수 있는 이름이 주어진 기억장소

function print() {
  console.log("Hello");
}

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안됨 (에러 예시 : Cannot access 'hi' before initialization)
// 초기화 전, 변수에 접근하면 커파일(빌드) 에러가 발생

//console.log(hi);  <-- hoisting이 선언만 한다는 것을 알고 싶으면 실행해보자
let hi = "hi";

let func1 = function () {}; // 표현식은 hoisting이 안됨

// console.log(Cat); <-- hoisting이 선언만 한다는 것을 알고 싶으면 실행해보자
class Cat {}

let x = 1;
{
  console.log(x);
  //   let x = 2; --> 블록 내부의 Lexical Environment가 먼저 만들어져서, 현재의 값 기준으로 hoisting이 먼저 된다.?
}

// var의 특징 (💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려워요
something = "💩";
console.log(something);

// 2. 변수를 중복으로 계속 선언을 해도 에러가 안생긴다.(바퀴벌레 같은 생존력)
var poo = "💩";
var poo = "💩";
console.log(poo);

// 3. Scope 개념이 없음... 미쳤음
var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원 됨.. 다행?
function example() {
  var dog = "🐶";
}
// console.log(dog);
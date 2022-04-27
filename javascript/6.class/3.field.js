/** field란?
 * 클래스를 구성하는 요소 중 하나로 클래스 "내부멤버"이다.
 * 어떠한 데이터를 저장하기 위한 역할을 담당
 * 클래스 내부의 constructor와 method 밖에 정의 된다.
 * 필드는 클래스 내부 멤버이기 때문에 member variable라고 불린다
 * 클래스 내 전역에서 사용하기 때문에 전역 변수라고도 불린다
 * 필드란!! 클래스 안에서 독립적으로 선언되는 변수를 뜻한다.
 */

// 접근제어자 - 캡슐화
// private(# 사용), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  //   constructor(name, emoji) {
  //     this.#name = name;
  //     this.#emoji = emoji;
  //   }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
console.log(apple);
// apple.#name = "오렌지";
// #field는 외부에서 접근이 불가능함.
// 외부에서 볼수도 없음

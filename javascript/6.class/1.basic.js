//객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스✨ 이용

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스
class Fruit1 {
  // constructor(생성자) : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 함수(행동)의 경우 constructor 밖에 지정해준다. (생성자 함수의 경우는 this.function으로 하나로 묶임)
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit1("apple", "🍎");
apple.display();

// Terminology!! : instance(인스턴스)
// apple은 Fruit1 클래스의 instance이다.

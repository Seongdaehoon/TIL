class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(Fruit.MAX_FRUITS);
console.log(banana);
banana.display();

Math.pow();
Number.isFinite(1);
// static으로 지정할 경우 클래스로 별로의 인스턴스를 만들지 않더라도, 클래스 자체에서 property와 method를 간편하게 가져다 쓸수 있다.
// Math, Number 클래스가 예시임.

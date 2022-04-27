class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // Parent constructor의 property
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자~!");
  }

  eat() {
    super.eat(); // Parent의 기능을 사용하고 싶을 때 super를 사용
    console.log("강아지가 먹는다"); // overriding
  }
}

const tiger = new Tiger("노랑이");
console.log(tiger.color);
tiger.eat();
tiger.sleep();

const dog = new Dog("갈색", "대훈");
console.log(dog.color, dog.ownerName);
dog.play();
dog.eat();

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

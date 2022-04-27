// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
  #num;
  constructor(initNum) {
    if (isNaN(initNum) || initNum < 0) {
      this.#num = 0;
    } else {
      this.#num = initNum;
    }
  }

  get value() {
    return this.#num;
  }
  addCount() {
    this.#num++;
  }
}

const counter = new Counter(10);
console.log(counter.value);
counter.addCount();
console.log(counter.value);

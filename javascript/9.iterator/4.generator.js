// const multiple = {
//     [Symbol.iterator]: () => {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

// Generator : 생성기
// 생성기를 만들기 위해서는 항상 "function*" 함수를 사용해야한다. asterik 붙여야 한다는것을 잊지 말 것!

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      // console.log(i);
      yield i * 2; // yield는 다음 사람이 호출할 때까지 기다렸다가, 사용자가 next를 호출해야만 그 다음으로 순회 시작!
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next(); // Generator 밖에서 next를 이용해 값을 가져오고 다음 값을 가르킨다
console.log(next.value, next.done); // 출력

// multiple.return();  // Generator를 종료 시켜 버림
// multiple.throw("Error!"); // Generator에 의도적으로 error발생시킴

next = multiple.next();
console.log(next.value, next.done);

next = multiple.next();
console.log(next.value, next.done);

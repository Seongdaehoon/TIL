// 엄격 모드 strict mode <--> sloppy mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
// mdn사이트를 보고 추가 공부 하자
"use strict";

// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  //   b = a + x;
  console.log(this);
}
add(1);

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

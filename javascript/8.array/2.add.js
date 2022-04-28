const fruits = ["🍌", "🍎", "🍇", "🍑"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩
fruits[6] = "🍓"; // index를 잘못 입력할 경우, 실수로 기존 데이터를 지우거나 원치 않은 먼 인덱스 위치에 저장하게 된다.
console.log(fruits);
delete fruits[1];
console.log(fruits); // delete로 삭제하게 되면 index 공간은 남아 있고, value만 삭제됨

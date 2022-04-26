function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add; // sum 변수에 add가 가리키고 있는 주소를 할당함.

console.log(sum(1, 2));
console.log(add(1, 2));

//함수는 항상 소괄호()를 작성해야 함수로 인식이 되어 호출된다.

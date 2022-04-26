function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

//예제 2
let lastName = "Seong";
let firstName = "Daehoon";
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

let lastName2 = "Choi";
let firstName2 = "Nari";
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);
// 반복적으로 하니 짜증나는구만. 함수로 만들어보자

function fullName(firstName, lastNmae) {
  return `${lastName} ${firstName}`;
}

console.log(fullName(firstName, lastName));

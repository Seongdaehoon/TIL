// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력, if와 ternary방식 모두 구현하기

//if
console.log("if문 방식");
if (num % 2 == 0) {
  console.log("👍");
} else {
  console.log("👎");
}

//ternary
console.log("ternary condition 방식");
num % 2 === 0 ? console.log("👍") : console.log("👎");

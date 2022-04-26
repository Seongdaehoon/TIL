// 삼항 조건 연산자 Ternary Operator
// 조건식 ? (참)표현식 : (거짓)표현식

fruit = "orange";

console.log("Conditional statement");
if (fruit == "apple") {
  console.log("🍎");
} else {
  console.log("🍊");
}

console.log("Ternary statement");
fruit === "apple" ? console.log("🍎") : console.log("🍊");
console.log("data");
let emoji = fruit === "apple" ? "🍎" : "🍊";
console.log(emoji);

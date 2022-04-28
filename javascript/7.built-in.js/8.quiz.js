//퀴즈!
// 1. 문자열의 모든 케릭터를 하나씩 출력하라.
const text = "Hello World";
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    continue;
  }
  console.log(text[i]);
}

//2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";
const ids_array = ids.split(", ");
console.log(ids_array);

//3. 1초에 한번씩 시계를 (날자포함) 출력해보자
// 전역함수 setInterval을 사용하자
setInterval(() => {
  const date = new Date();
  console.log(date.toLocaleString("en-US"));
}, 1000);

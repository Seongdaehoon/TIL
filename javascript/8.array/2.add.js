const fruits = ["๐", "๐", "๐", "๐"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ ๐ฉ
fruits[6] = "๐"; // index๋ฅผ ์๋ชป ์๋ ฅํ  ๊ฒฝ์ฐ, ์ค์๋ก ๊ธฐ์กด ๋ฐ์ดํฐ๋ฅผ ์ง์ฐ๊ฑฐ๋ ์์น ์์ ๋จผ ์ธ๋ฑ์ค ์์น์ ์ ์ฅํ๊ฒ ๋๋ค.
console.log(fruits);
delete fruits[1];
console.log(fruits); // delete๋ก ์ญ์ ํ๊ฒ ๋๋ฉด index ๊ณต๊ฐ์ ๋จ์ ์๊ณ , value๋ง ์ญ์ ๋จ

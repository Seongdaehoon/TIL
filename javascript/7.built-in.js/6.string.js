//String
const textObj = new String("Hello World!");
const text = "Hello World!";
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.length);

console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("H"));
console.log(text.includes("h"));

console.log(text.startsWith("He")); // 시작 여부 체크
console.log(text.endsWith("!")); // 끝 여부 체크

console.log(text.toUpperCase()); // 대문자로 변환하여 반환
console.log(text.toLowerCase()); // 소문자로 변환하여 반환

console.log(text.substring(0, 2)); // 원하는 부분을 index를 사용하여 string반환하기 (0~1)
console.log(text.slice(2)); // 해당 index전까지 잘라내고 string 반환 또는 해당 index부터만 반환하기
console.log(text.slice(-2)); // -를 사용하면 뒤에서 부터 잘라낼수 있음

const space = "            space            ";
console.log(space.trim()); //빈공간 제거

const longText = "Get to the point";
console.log(longText.split(" ")); // 인자 값을 기준으로 문자열을 나누어 배열로 반환
console.log(longText.split(" ", 2)); // 반환되는 배열 인자 갯수 정할 수 있음

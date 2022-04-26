/** Data Type
 * 1. Primitive type : 단일 데이터만 가지고 있음
 * - number, string, boolean, null, undefined, Symbol
 * - BigInt : max = 2^53-1
 * 2. Object type : 복합 데이터를 가지고 있음
 * - object(여러가지 데이터를 한번에 묶을수 있는 데이터 타입) - e.g array
 * - function
 */

// 1. number
let integer = 123; //양수
let negative = -123; //음수
let double = 1.23; //실수
console.log(integer, negative, double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
console.log(binary, octal, hex);

console.log(0 / 123); //0
console.log(123 / 0); //Infinity
console.log(123 / -0); //-Infinity
console.log(123 / "text"); //NaN (Not a Number)

let bigInt = 1234123412341234123412341324123412341234123412341234n;
console.log(bigInt);

//2. String
let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = "'안녕'";
console.log(string);

string = "안녕!\n엘리야!\t내 이름은\u09AC"; //
console.log(string);

// Template Literal : `` <- backtick사용
let id = "Danny";
let greetings = "'Hello!," + id + "👋🏻 \nHave a good one'"; // normal case
console.log(greetings);
greetings = `'Hello!, ${id}👋🏻 
Have a good one'`; // %{variable name}
console.log(greetings);

//3.boolean : True or False
let 참 = true;
let 거짓 = false;
console.log(참, 거짓);

// examples
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

// Falshy
console.log(!!0); // !! <- transform to boolean
console.log(!!-0);
console.log(!!""); // empty string
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{}); // {} <- empth object
console.log(!!Infinity);

// 4. Empty
// null, undefined
let variable; //아직 활성화된 아이템이 있는지 없는지 모르는 상태
console.log(variable);

variable = null; //활성화된 아이템이 "없는" 상태
console.log(variable);

console.log(typeof null); // type이 object로 텅비어있는 상태임을 알수 있음.
console.log(typeof undefined);

// 5. Object : 상태 및 행동을 함게 묶어둘 수 있음.
// {key: value}
// value <- both primitive type and object type can be assigned.
/** primitive type
 * If a value is assigned to particular variable,
 * the value will be stored in memory and variable name refer to memory address.
 * global assignment : "Data" memory
 * local assignment : "Stack" memory
 */
/** object type
 * Object --> "Heap" memory
 * Data in object stored in "Heap" memory
 * Object name directs "Data" memory address which contain "first address of "Heap" memory"
 */

let apple = {
  name: "apple",
  color: "red",
  display: "🍎",
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: "orange",
  color: "orange",
  display: "🍊",
};

// 6. Reference
// Primitive type : Copy by value
let a = 1;
let b = a;
console.log(a);
console.log(b);
b = 2;
console.log(a);
console.log(b);

//Object type : Copy by address
let watermelon = {
  name: "수박",
};
let melon = watermelon;
console.log(watermelon);
console.log(melon);
melon.name = "멜론";
console.log(watermelon);
console.log(melon);

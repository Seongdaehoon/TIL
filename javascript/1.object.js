// 객체 : 서로 연관있는 속성(property)과 행동(method)을 묶어 주기 위해
// 밀접하게 관련있는 상태와 행동을 객체로 묶어야겠군!

// Object literal {key:value}
// new Object();
// Object.create();
// key - string, number, word, Symbol
// value - primitive type, other object, function

let apple = {
  name: "apple", // property
  "hello-bye": "🖐",
  0: 1,
  ["hello-bye1"]: "🖐",
  display: () => {
    // method
    console.log("🍎");
  },
};

apple.name;
console.log(apple["hello-bye1"]); // bracket notation

// 속성추가
apple.emoji = "🏓";
console.log(apple.emoji);

// 속성삭제
delete apple.emoji;
console.log(apple);

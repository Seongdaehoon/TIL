const display = (num) => {
  num = 5;
  console.log(num);
};

const value = 4;
display(value);
console.log(value);

//결론 : 함수 내부에서 외부로부터 주어진 argument 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함 🤩
// Primitive type : Copy by value
// Object type : Copy by reference(memory address)

const displayObject = (obj) => {
  obj.name = "Bob";
  console.log(obj);
};
const ellie = { name: "Ellie" };
displayObject(ellie);
console.log(ellie);

// 작성자의 의도는 함수 내부에서 Bob이라고 바꾸고 싶었지만, Object의 참조 특성상 Heap에 있는 데이터가 바뀐다.
// 그래서 Ellie 또한 Heap에서 데이터를 참조하고 있기 때문에 외부에서도 바뀐다. 이 경우 문제가 많이 발생한다.
// 절대 하지 말자 ❌❌❌❌❌❌❌❌❌❌❌❌❌❌

//만약 부득이 바꿔야할 경우, 함수 이름에 해당 내용을 명시적으로 나타내자.

function changeName(obj) {
  return { ...obj, name: "Ellie" }; // 명시적으로 이렇게 표현하자!
}

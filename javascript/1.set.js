console.clear();
// Set
const set1 = new Set(); //argument 없이 객체 자체 생성자로 만들수 있고,
const set = new Set([1, 2, 3]); // 배열을 argument로 넣고 생성해도 된다.
console.log(set1);

// 존재하는지 사이즈 확인
console.log(set.size);

//존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // 중복이 절대 안된다.

//삭제
set.delete(6);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

const obj1 = { name: "apple", price: 5 };
const obj2 = { name: "banana", price: 2 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// Quiz -- 객체의 shallow copy. 즉 배열안에는 힙 메모리는 가르키는 주소가 들어있음.
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// Quiz
const obj3 = { name: "banana", price: 2 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);

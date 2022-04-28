// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ["🍌", "🍎", "🍇", "🍑"];

// 특정한 오브젝트가 배열인지 체크 .isArray
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때 .indexOf
console.log(fruits.indexOf("🍎"));

// 배열안에 특정한 아이템이 있는지 체크 .includes
console.log(fruits.includes("🍎"));

// 추가 - 제일 뒤 .push
let length = fruits.push("🍓"); // 배열 자체를 업데이트 하고, 길이를 반환해줌
console.log(fruits);
console.log(length);

// 추가 - 제일 앞 .unshift
length = fruits.unshift("🍈"); // 배열 자체를 업데이트 하고, 길이를 반환해줌
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤 .pop
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞 .shift
let firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);

// 중간에 추가 또는 삭제 .splice
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, "🍎");
console.log(fruits);

// 잘라진 새로운 배열을 만듬 : .slice
let newArr = fruits.slice(0, 2); // 원하는 위치의 값을 배열로 잘라내어 반환하지만, 기존의 배열은 건드리지 않음
console.log(fruits);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로 .reverse()
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙펴기 .flat() / 기존 배열 수정
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
arr = arr.flat(2);

// 특정한 값으로 배열을 채우기 .fill() / 기존 배열 수정
arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("a", 2);
console.log(arr);

// 배열을 문자열로 합하기 .join() / 새로운 배열 반환
let text = arr.join();
console.log(text);
text = arr.join(" | ");
console.log(text);
console.log(arr);

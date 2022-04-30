const map = new Map([
  ["key1", "apple"],
  ["key2", "banana"],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인(키값 확인 가능)
console.log(map.has("key2"));
// 순회
map.forEach((num, key, map) => console.log(num, key, map));
for (const item of map.values()) {
  console.log(item);
}
for (const item of map.keys()) {
  console.log(item);
}
for (const item of map.entries()) {
  console.log(item);
}
// 찾기 (Important) Map은 Key를 통해서만 데이터에 접근이 가능하다.
console.log(map.get("key1"));
console.log(map.get("key6"));
// 추가
map.set("key3", "peach");
console.log(map);
// 삭제
map.delete("key3");
console.log(map);
// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점은?
const key = { name: "milk", price: 10 };
const milk = { name: "mink", price: 10, description: "맛있는우유" };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));

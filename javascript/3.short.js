const x = 0;
const y = 0;
// const coordinate = { x: x, y: y };
const coordinate = { x, y }; //key와 value가 같을 경우 하나로 표현하면 됨
console.log(coordinate);

//another example
function makeObj(name, age) {
  return {
    name, // name : name
    age, // age : age
  };
}

function a() {
  console.log("a stack-in");
  return 1;
}

function b() {
  console.log("b stack-in");
  return a() + 1;
}

function c() {
  console.log("c stack-in");
  return b() + 1;
}

const result = c();
console.log(result);

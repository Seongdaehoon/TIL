// return으로 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  //return a+b;
}

function print(text) {
  if (text !== "안녕하세요") {
    return;
  }
  console.log(text);
  //   return;
}

text = "녕하세요";
print(text);

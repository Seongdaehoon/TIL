function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      const max = maxValue;
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > max };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (num) => {
  return num * 2;
});

for (item of multiple) {
  console.log(item);
}

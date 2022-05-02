function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 2000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 5000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

async function fetchFruits() {
  const banana = await getBanana();
  console.log("getBanana 끝", banana);
  const apple = await getApple();
  console.log("getApple 끝", apple);
  return [banana, apple];
  //   return getBanana().then((banana) =>
  //     getApple().then((apple) => [banana, apple])
  //   );
}

fetchFruits().then((fruits) => console.log(fruits));

setInterval(() => {
  console.log("hello");
}, 1000);

console.clear();

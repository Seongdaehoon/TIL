console.clear();
function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  //   return Promise.reject(new Error("에러"));
  return Promise.resolve("🪴 => 🐔");
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    console.log(error);
    chicken = "🐥";
  }
  const egg = await fetchEgg(chicken);
  const result_1 = await fryEgg(egg);
  return result_1;
}

makeFriedEgg().then(console.log);

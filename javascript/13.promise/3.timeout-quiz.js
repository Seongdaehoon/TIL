// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  try {
    if (!seconds || seconds * 1000 < 0) {
      throw new Error("seconds는 0보다 커야 함");
    }
    if (!callback) {
      throw new Error("callback 함수를 전달해야 함");
    }
    setTimeout(() => {
      callback();
    }, seconds * 1000);
  } catch (error) {
    console.log(error);
  }
}

runInDelay(() => {
  console.log("타임아웃완료");
}, 1);

// The promise object represents the eventaul completion (or failure)
// of an asynchronous operation and its resulting value

/** A Promise is in one of these states
 * pending : initial state, neither fulfilled nor rejected
 * fulfilled : meaning that the operation was completed successfully
 * rejected : meaning that the operation failed
 */

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작거나 없음"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay()
  .then(() => console.log("타이머 완료"))
  .catch(console.error)
  .finally(() => console.log("끝났다"));

console.log("하이");

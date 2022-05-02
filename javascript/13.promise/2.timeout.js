// async는 callback함수를 받아서 따로 처리하다가 Task Queue에 결과를 저장시켜 주고,
// Event loop가 감시하다가ㅏ Call Stack이 비었을 때 전달하여 실행시킨다.
// 아래의 함수는 "처리"는 3초까지 기다리는 것임
function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();

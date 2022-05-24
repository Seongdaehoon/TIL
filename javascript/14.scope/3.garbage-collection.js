// Garbage Collection ; Memory Management
// C언어는 개발자가 직접 메모리 관리를 해야 함 (만들었다가 지웠다가.. heck 노가다..)
// C# GO JAVA JS는 메모리 관리를 직접할 필요 없다.
// 왜냐하면 Garbage Collector(GC)가 있기 때문이다.
// 자바스크립트 엔진 백그라운드 프로세스임.

const global = 1; // 글로벌 변수는 app이 종료될때까지 계속 메모리에 유지됨! 그래서 가능하면 글로벌 변수 사용을 하지 않는 것이 좋다.
{
  // Block 내부에서만 존재하고, 블럭이 끝나면 GC에 의해 사라짐.
  const local = 1;
}

function print() {
  // 함수 내부에서도 블럭안에서 필요한 경우에는
  // 필요한 곳에서! 블럭 안에서 변수를 선언하고 사용해야 함
  if (true) {
    let temp = 0;
  }
}

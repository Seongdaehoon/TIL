//실행 컨텍스트 Execution Context
/**
 * Javascript runtime환경에 CallStack이 있습니다.
 * 이 CallStack에 하나씩 실행 순서를 저장/기억할 수 있습니다. (FILO)
 * JS는 단 하나의 싱글 컨텍스트 스택이 있음
 * 각각의 블록은 Lexical Environment라는 내부 Object를 가지고 있다.
 * 각각 block마다 value는 뭔지? 부모는 뭔지? 등에 대한 정보를 가지고 있는 Object가 있다는 뜻이다.
 * Lexical Environment =>
 * 1) Environment Record : 그 블록 자체의 정보가 무엇인지?
 * 2) Outer Lexical Environment Reference : 부모는 누군지? 부모를 참조하는 것
 * Scope Chaining
 */
// 메모리 절약 뿐만 아니라, 성능을 위해서라도 변수는 최대한 필요한 곳에서 정의해야 겠군!
// 이렇게 중첩된 스코프나 함수가 있다면, 필요한 곳에서 변수를 선언하지 않으면, 함수를 실행하기 위에 스코프 체인을 통해 돌아다니며 적합한 환경 레코드를 찾으러 돌아다닌다. 단순하게 생각해도 뭔가 비효율적인 움직임으로 보이지 않나? 변수 선언 적절히 잘하자잉

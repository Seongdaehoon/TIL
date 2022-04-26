/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대문자를 구분함
 * 추천 : camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 특수문자 ❌ ( _, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성
 */

// 나쁜예제 🙈
let number = 20;
let audio1;
let audio2; // 변수명에 순서를 나타내는 숫자를 넣는 것

// 좋은예제 👑
let myAge = 20;
let backgroundAudio;
let windAudio;

// Tips! 🍯 : 주요성격을 먼저 쓰고, 구체적인 내용을 뒤에 따라오도록 배치한다.
let audioBackground;
let audioWind;

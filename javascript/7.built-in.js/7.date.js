console.log(new Date()); // 현재의 시간을 불러올 수 있음
console.log(new Date("Jun 5, 2022")); // 특정 날짜를 지정 가능
console.log(new Date("2022-12-17T03:24:00")); // 다른 형식으로 가능

// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

const now = new Date();
// now.setFullYear(2023);
// now.setMonth(10); // 0: 1월 ~ 11: 12월
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1일
console.log(now.getDay()); // 0: 일요일 ~ 6:토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("ko-kr"));

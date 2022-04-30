//Nullilsh Coalescing Operator
// ES11 (ECMAScript 2020) 추가
//?? null, undefined일 때만.. 사용
// || falshy한 경우 설정(할당) 0, -0, "", undefined, null 등 falshy
let num = 0;
console.log(num || "-1");
console.log(num ?? "-1");

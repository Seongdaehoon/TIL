// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, dept, hours, payRate) {
    this.name = name;
    this.dept = dept;
    this.hours = hours;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hours * this.payRate;
  }
}

class Fulltime extends Employee {
  static PAY_RATE = 10000;
  constructor(name, dept, hours) {
    super(name, dept, hours, Fulltime.PAY_RATE);
  }
}

class Parttime extends Employee {
  static PAY_RATE = 8000;
  constructor(name, dept, hours) {
    super(name, dept, hours, Parttime.PAY_RATE);
  }
}

const fulltime = new Fulltime("성대훈", "영업", 40);
const parttime = new Parttime("최나리", "제작", 40);
console.log(fulltime.calculatePay());
console.log(parttime.calculatePay());

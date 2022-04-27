// 접근자 프로퍼티 (Accessor Property)
// get : function을 property로 간주하고 싶을 때 사용함.
// 화살표 함수는 사용이 안되네?
// set : 무엇인가를 할당하고 싶을 때는 set을 사용한다.
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName} `;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("Daehoon", "Seong");
console.log(student.firstName);
console.log(student.fullName);
student.fullName = "김철수";

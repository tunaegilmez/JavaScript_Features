// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   showInfos() {
//     console.log("İsim: " + this.name + ", Yaş: " + this.age);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, salary) {
//     // this.name = name;
//     // this.age = age;
//     super(name, age);
//     this.salary = salary;
//   }

//   showInfos() {
//     //Overrideing
//     console.log(
//       "İsim: " + this.name + ", Yaş: " + this.age + ", Maaş: " + this.salary
//     );
//   }

//   toString() {
//     //Overrideing
//     console.log("Employee");
//   }

//   raiseSalary(amount) {
//     // Ekstra
//     this.salary += amount;
//   }
// }

// const emp = new Employee("Tuna", 21, 15000);
// emp.raiseSalary(5000);
// // console.log(emp);
// emp.showInfos();
// emp.toString();

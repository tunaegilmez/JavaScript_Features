// // Kalıtım - Inheritance

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.showInfos = function () {
//   console.log("isim: " + this.name + ", yaş: " + this.age);
// };

// // const person = new Person("Tuna", 21);
// // console.log(person);

// function Employee(name, age, salary) {
//   //   this.name = name;
//   //   this.age = age;
//   Person.call(this, name, age); // Person methodundan name ve age argümanlarını Emplooye methoduna dahil etme.
//   this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//   console.log("Employee");
// };

// // Override - Aşırı Yükleme
// Employee.prototype.showInfos = function () {
//   console.log(
//     "isim: " + this.name + ", yaş: " + this.age + ", Maaş: " + this.salary
//   );
// };

// const emp = new Employee("Tuna", 21, 15000);
// // console.log(emp);
// emp.showInfos();
// emp.toString();

// // const deneme = new Person("Zeynep", 21);
// // deneme.showInfos();
// // console.log(deneme);

const print = (x) => {
  console.log(x);
};

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  showInfos() {
    print(
      "isim: " + this.name + ", yaş: " + this.age + ", Maaş: " + this.salary
    );
  }
}

const emp = new Employee("Tuna", 21, 15000);
emp.showInfos();

print(emp);

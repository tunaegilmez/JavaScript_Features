// // Call - Aply - Bind

// const obj1 = {
//   num1: 10,
//   num2: 20,
// };

// const obj2 = {
//   num1: 30,
//   num2: 40,
// };

// function addNumbers(num3, num4) {
//   console.log(this.num1 + this.num2 + num3 + num4);
// }

// // addNumbers(100, 200);

// // addNumbers.call(obj1, 100, 200);
// // addNumbers.call(obj2, 100, 200);

// // addNumbers.apply(obj1, [100, 200]);
// // addNumbers.apply(obj2, [100, 200]);

// function getNumbersTotal(num3, num4) {
//   return this.num1 + this.num2 + num3 + num4;
// }

// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);
// // console.log(copyFunc1);
// // console.log(copyFunc2);
// console.log(copyFunc1(100, 200));
// console.log(copyFunc2(100, 200));

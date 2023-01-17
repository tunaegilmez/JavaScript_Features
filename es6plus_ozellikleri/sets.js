// bir değeri sadece bir defa taşır.

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("tuna");
myset.add(true);
myset.add([1, 2, 3, 4]);
myset.add({ a: 1, b: 2, c: 3 });

const myset2 = new Set([100, 3.14, "Tuna"]);

// console.log(myset);
// console.log(myset2);

// console.log(myset.size);

// myset.delete("tuna");
// console.log(myset);

// console.log(myset.has("tuna"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1, 2, 3, 4]));

// myset.forEach(function (x) {
//   console.log(x);
// });

// for (let x of myset) {
//   console.log(x);
// }

// const arr = Array.from(myset);
// console.log(arr);

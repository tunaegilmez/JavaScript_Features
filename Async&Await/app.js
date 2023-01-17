// async function test(data) {
//   // return new Promise
//   //   return data;

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Bu bir değerdir.");
//     }, 3000);
//   });

//   let response = await promise; // 5 saniye bekleyecek
//   // await sadece async function içinde kullanılır

//   return response;
// }

// test("Merhaba").then((response) => console.log(response));

// Ornek - 1

// async function testData(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("Lütfen bir string girin"));
//       }
//     }, 3000);
//   });

//   const response = await promise;

//   return response;
// }

// testData("thriller")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Ornek - fetch

async function getCurrency(url) {
  const response = await fetch(url); // Response Object

  const data = await response.json();

  return data;
}

getCurrency(
  "https://api.apilayer.com/exchangerates_data/latest?apikey=ub7QTcVyN6YzOAZcoeprv3o1xUIjV0ck"
).then((response) => console.log(response));

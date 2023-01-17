// Konu Anlatımı
// function getData(data) {
//   // Promise objesi döndüren fonksiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       //   resolve("Olumlu sonuç");
//       reject("Olumsuz Sonuç");
//     }, 5000);
//   });
// }

// // getData("Merhaba").then(function (response) {
// //   //Resolve ile kullanım.
// //   console.log(response);
// // });

// getData("Merhaba").catch(function (err) {
//   // Reject ile kullanım.
//   console.log(err);
// });

// ÖRNEK - 1

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         //Olumlu
//         resolve(data);
//       } else {
//         //Olumsuz
//         reject(new Error("Lütfen string bir değer girin")); // Error objesi daha açıklayıcı çıktı verir
//       }
//     }, 5000);
//   });
// }

// getData(21)
//   .then((response) => {
//     console.log("Gelen Değer: " + response);
//   })
//   .catch((err) => {
//     console.error(err); // .error kırmızı yazar.
//   });

// ÖRNEK - 2

// function addTwo(number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         resolve(number + 2);
//       } else {
//         reject(new Error("Lütfen Bir Sayı Girin!"));
//       }
//     }, 3000);
//   });
// }

// addTwo(10)
//   .then((response) => {
//     console.log(response);
//     return response + 2;
//   })
//   .then((response2) => console.log(response2))
//   .catch((err) => console.error(err));
// // !Yalnızca 1 tane cath kullanılabilir. Ancak birden fazla then kullanılabilir.(Chain yapısı)

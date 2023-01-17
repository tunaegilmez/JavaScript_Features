// document.getElementById("btn").addEventListener("click", function () {
//   console.log("Tıkla");
// });

// function process1(callback) {
//   setTimeout(function () {
//     console.log("Process 1");
//     callback();
//   }, 3000);
// }

// function process2() {
//   //   console.log("Process 2");
//   setTimeout(() => {
//     console.log("Process 2");
//   }, 2000);
// }

// process1(process2);
// // process2();
// console.log("async işlem örneği");

const langs = ["Java", "Kotlin", "C#"];

const addLang = (lang, callback) => {
  setTimeout(() => {
    langs.push(lang);
    console.log("Eklendi");
    callback();
  }, 2000);
};

const getAllLangs = () => {
  setTimeout(() => {
    langs.forEach((lang) => {
      console.log(lang);
    });
  }, 1000);
};

addLang("JavaScript", getAllLangs);

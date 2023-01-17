function getTextFile() {
  // Text dosyasından verileri alma
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function getJsonFile() {
  // Local json dosyayınsan veri alma
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function getExternalApi() {
  fetch(
    "https://api.apilayer.com/exchangerates_data/latest?apikey=ub7QTcVyN6YzOAZcoeprv3o1xUIjV0ck"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.rates.TRY))
    .catch((err) => console.error(err));
}

// getTextFile();

// getJsonFile();

getExternalApi();
// https://api.apilayer.com/exchangerates_data/latest?apikey=ub7QTcVyN6YzOAZcoeprv3o1xUIjV0ck

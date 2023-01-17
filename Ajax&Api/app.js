document.getElementById("change").addEventListener("click", change);

function change() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://api.apilayer.com/exchangerates_data/latest?apikey=ub7QTcVyN6YzOAZcoeprv3o1xUIjV0ck"
  );

  xhr.onload = function () {
    if (this.status) {
      const response = JSON.parse(this.responseText);
      // console.log(this.responseText);
      // console.log(response.rates.TRY);

      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);

      // console.log(amount * rate);

      document.getElementById("tl").value = amount * rate;
    }
  };

  xhr.send();
}

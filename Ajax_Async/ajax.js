// Http Status
// 200 : OK
// 403 : Forbiden
// 404 : Not Found
// 505 : Internal server Error

// Holds the status of the XMLHttpRequest.
// 0 : request not initialized
// 1 : server connection established
// 2 : request received
// 3 : processing request
// 4 : request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  // XmlHttpRequest

  const xhr = new XMLHttpRequest();

  //   console.log(xhr);

  xhr.onprogress = function () {
    console.log("Process Başlatılıyor...", this.readyState);
  };

  xhr.onload = function () {
    // Burası sadece reesponse'umuz hazır olduğunda çalışır.
    // console.log(this.readyState);
    const showText = document.getElementById("ajax");
    if (this.status == 200) {
      // console.log(this.responseText);
      showText.innerHTML = this.responseText;
    }
  };

  xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    // console.log(this.status);

    if (this.status == 200 && this.readyState == 4) {
      // Response Hazır.
      console.log(this.responseText);
    }
  };

  xhr.open("GET", "example.txt", true);

  xhr.send();
});

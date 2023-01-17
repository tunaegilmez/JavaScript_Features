// Ajax, CallBack, http request

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  // Get Request

  get(url, callback) {
    this.xhr.open("GET", url);

    this.xhr.onload = () => {
      if ((null, this.xhr.status === 200)) {
        callback(this.xhr.responseText);
      } else {
        //Hata
        callback("GET REQUEST Hata Oluştu!", null);
      }
    };

    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        // Başarılı
        callback(null, this.xhr.responseText);
      } else {
        callback("POST REQUEST Hata Oluştu!", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.getResponseHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        //HATA
        callback("PUT REQUEST Hata Oluştu!", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }

  delete(url, callback) {
    this.xhr.open("DELETE", url);

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Veri Silme İşlemi Başarılı");
      } else {
        callback("DELETE REQUEST Hata Oluştu!", null);
      }
    };

    this.xhr.send();
  }
}

const request = new Request();

// GET REQUEST

// request.get(
//   "https://jsonplaceholder.typicode.com/albums/58",
//   (err, response) => {
//     if (!err) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );

// POST REQUEST

// request.post(
//   "https://jsonplaceholder.typicode.com/albums",
//   { userId: 2, title: "Thriller" },
//   (err, album) => {
//     if (!err) {
//       console.log(album);
//     } else {
//       // HATA
//       console.log(err);
//     }
//   }
// );

// PUT REQUEST

// request.put(
//   "https://jsonplaceholder.typicode.com/albums/10",
//   { userId: 143, title: "Metalica - Moster of pupper" },
//   (err, album) => {
//     if (!err) {
//       console.log(album);
//     } else {
//       // HATA
//       console.log(err);
//     }
//   }
// );

request.delete(
  "https://jsonplaceholder.typicode.com/albums/10",
  (err, response) => {
    if (!err) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);

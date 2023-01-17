class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "DELETE",
      })
        .then((response) => resolve("Veri silme işlemi başarılı"))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

// GET

// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     console.log(albums);
//   })
//   .catch((err) => console.error(err));

// POST

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Thriller",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.error(err));

// PUT

// request
//   .put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: 10,
//     title: "Test",
//   })
//   .then((newalbum) => console.log(newalbum))
//   .catch((err) => console.error(err));

// DELETE

// request
//   .delete("https://jsonplaceholder.typicode.com/albums/1")
//   .then((message) => console.log(message))
//   .catch((err) => console.error(err));

class Request {
  async get(url) {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const responsedata = await response.json();

    return data;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const responsedata = await response.json();

    return data;
  }

  async delete(url) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1",
      {
        method: "DELETE",
      }
    );

    // const data = await response.json();

    return "Veri silme işlemi başarılı";
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

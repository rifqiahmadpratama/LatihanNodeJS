const axios = require("axios");
const http = require("http");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const users = res.data;
    console.log("Status Code: ", res.status);
    users[0].name = "Rifqi Ahmad Pratama";
    http
      .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        for (user of users) {
          res.write(
            "<li>Got user with id :" + user.id + "name:" + user.name + "</li>"
          );
        }
        res.end();
      })
      .listen(8080);
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

console.log("server running on http://localhost:8080");

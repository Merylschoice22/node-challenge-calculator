const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Stuff");
});

// http://localhost:3000/add?value1=10&value2=2
// http://localhost:3000/substract?value1=10&value2=2
// http://localhost:3000/multiply?value1=10&value2=2
// http://localhost:3000/divide?value1=10&value2=2

// let port = 3000;
// app.listen(port, function () {
//   console.log("Your app is listening on port " + port);
// });

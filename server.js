const { response } = require("express");
const express = require("express");
const app = express();

/** Step 1: Reading endpoint query **/
// http://localhost:3000/add?value1=10&value2=2
// http://localhost:3000/substract?value1=10&value2=2
// http://localhost:3000/multiply?value1=10&value2=2
// http://localhost:3000/divide?value1=10&value2=2

app.get("/", (req, res) => {
  res.send("Stuff");
});

app.get("/add", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const sum = value1 + value2;
  res.send(`${sum}`);
});

app.get("/subtract", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const subtraction = value1 - value2;
  res.send(`${subtraction}`);
});

app.get("/multiply", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const product = value1 * value2;
  res.send(`${product}`);
});

app.get("/divide", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const division = value1 / value2;
  res.send(`${division}`);
});

/** Step 2: Reading endpoints parameters **/
// http://localhost:3000/add/10/2
// http://localhost:3000/substract/10/2
// http://localhost:3000/multiply/10/2
// http://localhost:3000/divide/10/2
/*
app.get("/:account/:repository", (req, res) => {
  const accountID = req.params.account;
  const repositoryID = req.params.repository;
  console.log(
    "The user requested the repository" +
      repositoryID +
      " of the user " +
      accountID
  );
  res.send(
    "The user requested the repository" +
      repositoryID +
      " of the user " +
      accountID
  );
});
*/
app.get("/add/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const sum = value1 + value2;
  res.send(`${sum}`);
});

app.get("/subtract/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const subtract = value1 - value2;
  res.send(`${subtract}`);
});

app.get("/multiply/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const product = value1 * value2;
  res.send(`${product}`);
});

app.get("/divide/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const divide = value1 / value2;
  res.send(`${divide}`);
});

/** Step 3: use a logger **/
//Adding this logger to your server, will log in the console all the requests

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

let port = 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

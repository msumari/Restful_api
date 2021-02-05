const express = require("express");
const app = express();
const session = require("express-session");
const cookies = require("cookie-parser");

const dummy = {
  id: 1,
  name: "Tanzania",
};
let user = {
  name: "John",
  Age: 24,
};

const logger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const requestTime = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

app.use(logger);
app.use(requestTime);
app.use(cookies());

app.use(
  session({
    secret: "your secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/setup", (req, res) => {
  req.session.name = "John";
  return res.send("Session Set");
});

app.get("/session", (req, res) => {
  var name = req.session.name;
  return res.send(name);
});

app.get("/destroy", (req, res) => {
  req.session.destroy((error) => {
    console.log("Session Destroyed");
  });
  res.end();
});

app.get("/time", (req, res) => {
  res.send(`Current time:${req.reqTime}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/ping", (req, res) => {
  res.send("Node api");
});

app.get("/dummy", (req, res) => {
  res.json(dummy);
});

app.get("/setuser", (req, res) => {
  res.cookie("userData", user);
  res.json("User data added to cookies");
});

app.get("/getuser", (req, res) => {
  res.json(req.cookies);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`api live on port ${PORT}`));

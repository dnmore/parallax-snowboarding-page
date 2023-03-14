const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/messages", function (req, res) {
  const filePath = path.join(__dirname, "data", "messages.json");

  const fileData = fs.readFileSync(filePath);
  const storedMessages = JSON.parse(fileData);

  res.render("messages", {
    numberMessages: storedMessages.length,
    messages: storedMessages,
  });
});

app.get("/share", function (req, res) {
  res.render("share");
});

app.post("/share", function (req, res) {
  const message = req.body;
  const filePath = path.join(__dirname, "data", "messages.json");

  const fileData = fs.readFileSync(filePath);
  const storedMessages = JSON.parse(fileData);

  storedMessages.push(message);

  fs.writeFileSync(filePath, JSON.stringify(storedMessages));

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.listen(3000);

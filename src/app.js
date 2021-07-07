const express = require("express");
const app = express();
const path = require("path");
const config = require("../config.json");
const db = require("../src/db/index");

// Public Files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});
app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/main.js"));
});
app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/styles.css"));
});
//Fonts
app.get("/fonts/Yellowtail-Regular", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/fonts/Yellowtail-Regular.ttf"))
});
app.get("/fonts/Rancho-Regular", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/fonts/Rancho-Regular.ttf"))
});

// API BACKEND
app.use("/api/saveIpAddress", require("./api/routes/saveIpAddress"));

const open = require('open');

// opens the url in the default browser 

// DB INIT
//db.query_sqlite("Insert INTO stations (name, ip) VALUES ('hs1','192.14.323.2')")
//db.query_sqlite('').catch(err => console.log('error'))

// Application Port
const PORT = config.application.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server Started on PORT : ${PORT}`);
  open('http://localhost:3000');
});

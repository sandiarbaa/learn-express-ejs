const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // menggabungkan path direktori utama (yaitu dimana file index.js itu berada) dengan folder views, agar projek website nya bisa di akses di terminal manapun, mengatasi error
// ~/OneDrive/Documents/coding/expressjs/learn-express-ejs/views

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8080, () => {
  console.log("Listening on port http://localhost:8080");
});

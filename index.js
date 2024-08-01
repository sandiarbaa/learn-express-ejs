const express = require("express");
const app = express();

// setting default view engine express, ini pakai ejs
app.set("view engine", "ejs"); // jadinya harus membuat folder views

// merender file yg ada di folder views ke route url tertentu
app.get("/", (req, res) => {
  res.render("home"); // pemanggilan file sudah relatif terhadap folder views, no file extension tetap ok
});

app.listen(8080, () => {
  console.log("Listening on port http://localhost:8080");
});

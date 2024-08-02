const path = require("path");
const express = require("express");
const app = express();
const tagsData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("home"); // parameter pertama untuk merender file mana
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  const numStatus = num % 2 === 0 ? "Genap" : "Ganjil";
  res.render("random", { numStatus, num });
});

app.get("/tag/:tag", (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];

  // res.render("tag", { data });

  if (data) {
    res.render("tag", { data });
  } else {
    res.render("notfound", { tag });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

app.listen(8080, () => {
  console.log("Listening on port http://localhost:8080");
});

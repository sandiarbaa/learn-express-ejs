const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  const numStatus = num % 2 === 0 ? "Genap" : "Ganjil";
  res.render("random", { numStatus, num });
});

// mendapatkan data dari parameter, kemudian binding/passing/kirim ke dalam view nya untuk ditampilkan, agar datanya dinamis
app.get("/tag/:tag", (req, res) => {
  const { tag } = req.params; // Get the tag from the URL
  const tags = tag.charAt(0).toUpperCase() + tag.slice(1); // Capitalize the first letter
  res.render("tag", { tag, tags });
});

app.listen(8080, () => {
  console.log("Listening on port http://localhost:8080");
});

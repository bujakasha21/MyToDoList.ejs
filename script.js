const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const zadatak = ["baci smece", "uci", "idi u prodavnicu"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const danas = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const dan = danas.toLocaleDateString("ba", options);

  res.render("list", { danasnjiDatum: dan, novaLista: zadatak });
});

app.post("/", (req, res) => {
  const uneseniZadatak = req.body.noviZadatak;

  zadatak.push(uneseniZadatak);
  res.redirect("/");
});

app.listen(3000, (req, res) => {
  console.log("Server has started on port 3000");
});

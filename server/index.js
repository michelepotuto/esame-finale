const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Marvel5590P-",
  database: "biglietteriaconcertionline",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getUser", (req, res) => {
  const sqlSelect = "SELECT * FROM clienti";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getTickets", (req, res) => {
  const sqlSelect = "SELECT * FROM biglietto";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getSeller", (req, res) => {
  const sqlSelect = "SELECT NomeAzienda FROM venditore";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

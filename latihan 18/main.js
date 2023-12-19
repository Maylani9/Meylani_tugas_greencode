const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
let dataArray = [];
app.get("/get-data", (req, res) => {
  res.json({ message: "succes get data", dataArray });
});

app.post("/post-data", function (req, res) {
  const { id, nama, code, category, price } = req.body;
  const dataBaru = {
    id: id,
    nama: nama,
    code: code,
    category: category,
    price: price,
  };
  dataArray.push(dataBaru);
  res.json({ message: "succes post data" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

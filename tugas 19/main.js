const express = require("express");
const { PostData } = require("./api/user/postData");
const { GetData } = require("./api/user/getData");
const { DeleteData } = require("./api/user/delete");
const { GetProduct } = require("./api/product/getProduk");
const { DeleteProduct } = require("./api/product/deleteProduct");
const { PostProduct } = require("./api/product/postProduck");
const { GetBiodata } = require("./api/biodata/getBiodata");
const { PostBiodata } = require("./api/biodata/postBiodata");
const { DeleteBiodata } = require("./api/biodata/deleteBiodata");
const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/get-data", GetData);
app.post("/post-data", PostData);
app.delete("/delete-data", DeleteData);

// route product
app.get("/get-product", GetProduct);
app.post("/post-product", PostProduct);
app.delete("/delete-product", DeleteProduct);

// route biodata
app.get("/get-biodata", GetBiodata);
app.post("/post-biodata", PostBiodata);
app.delete("/delete-biodata", DeleteBiodata);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

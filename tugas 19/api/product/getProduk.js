const DataProduct = require("../../data/dataProduk");

exports.GetProduct = function (req, res) {
  res.json({ message: "succes get data", DataProduct });
};

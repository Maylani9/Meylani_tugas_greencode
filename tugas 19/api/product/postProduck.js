const DataProduct = require("../../data/dataProduk");
exports.PostProduct = function (req, res) {
  const { id, nama, harga, stok } = req.body;

  DataProduct.push({
    id: id,
    nama: nama,
    harga: harga,
    stok: stok,
  });
  res.json({
    message: "succes post data",
  });
};

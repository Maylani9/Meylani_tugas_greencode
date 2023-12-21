const DataArray = require("../../data/data");
exports.PostData = function (req, res) {
  const { id, nama, number_phone, point } = req.body;
  const dataBaru = {
    id: id,
    nama: nama,
    number_phone: number_phone,
    point: point,
  };
  DataArray.push(dataBaru);
  res.json({ message: "succes post data" });
};

const DataArray = require("../../data/data");

exports.GetData = function (req, res) {
  res.json({ message: "succes get data", DataArray });
};

const DataBiodata = require("../../data/biodata");

exports.GetBiodata = function (req, res) {
  res.json({ message: "succes get data", DataBiodata });
};

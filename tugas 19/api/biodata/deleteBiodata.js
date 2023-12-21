const DataBiodata = require("../../data/biodata");
exports.DeleteBiodata = function (req, res) {
  const { id } = req.body;

  for (let index = 0; index < DataBiodata.length; index++) {
    if (id == DataBiodata[index].id) {
      DataBiodata.splice(index, 1);
    }
  }
  res.json({
    message: "data berhasil dihapus",
  });
};

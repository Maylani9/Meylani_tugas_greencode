const DataArray = require("../../data/data");
exports.DeleteData = function (req, res) {
  const { id } = req.body;

  for (let index = 0; index < DataArray.length; index++) {
    if (id == DataArray[index].id) {
      DataArray.splice(index, 1);
    }
  }
  res.json({
    message: "data berhasil dihapus",
  });
};

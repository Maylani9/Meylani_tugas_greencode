const DataBiodata = require("../../data/biodata");
exports.PostBiodata = function (req, res) {
  const { id, nama, jenis_kelamin, agama, alamat, usia, tanggal_lahir } =
    req.body;

  DataBiodata.push({
    id: id,
    nama: nama,
    jenis_kelamin: jenis_kelamin,
    agama: agama,
    alamat: alamat,
    usia: usia,
    tanggal_lahir: tanggal_lahir,
  });
  res.json({
    message: "succes post data",
  });
};

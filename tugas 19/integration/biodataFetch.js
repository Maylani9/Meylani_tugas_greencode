const apiUrl = "http://localhost:3000/";
const getData = document.getElementById("data");
fetch(apiUrl + "get-biodata")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for (let index = 0; index < data.DataBiodata.length; index++) {
      console.log(data.DataBiodata.length);
      getData.innerHTML += `<tr>
               
        <td>${data.DataBiodata[index].id}</td>   
        <td>${data.DataBiodata[index].nama}</td>   
        <td>${data.DataBiodata[index].jenis_kelamin}</td>   
        <td>${data.DataBiodata[index].agama}</td>  
        <td>${data.DataBiodata[index].alamat}</td>  
        <td>${data.DataBiodata[index].usia}</td>  
        <td>${data.DataBiodata[index].tanggal_lahir}</td>  
        <td>
            <button>edit</button>
            <button onclick="deleteData(${data.DataBiodata[index].id})">delete</button>
        </td>   
    </tr>`;
    }
  });
function addData() {
  const getInputId = document.getElementById("input-id");
  const getInputNama = document.getElementById("input-nama");
  const getInputJenisKelamin = document.getElementById("input-jenis_kelamin");
  const getInputAgama = document.getElementById("input-agama");
  const getInputAlamat = document.getElementById("input-alamat");
  const getInputUsia = document.getElementById("input-usia");
  const getInputTanggal_Lahir = document.getElementById("input-tanggal_lahir");

  const data = {
    id: getInputId.value,
    nama: getInputNama.value,
    jenis_kelamin: getInputJenisKelamin.value,
    agama: getInputAgama.value,
    alamat: getInputAlamat.value,
    usia: getInputUsia.value,
    tanggal_lahir: getInputTanggal_Lahir.value,
  };
  fetch(apiUrl + "post-biodata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  window.location.reload();
}
function deleteData(id) {
  fetch(apiUrl + "delete-biodata", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  window.location.reload();
}

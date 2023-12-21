const apiUrl = "http://localhost:3000/";
const getData = document.getElementById("data");
fetch(apiUrl + "get-product")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for (let index = 0; index < data.DataProduct.length; index++) {
      console.log(data.DataProduct.length);
      getData.innerHTML += `<tr>
               
        <td>${data.DataProduct[index].id}</td>   
        <td>${data.DataProduct[index].nama}</td>   
        <td>${data.DataProduct[index].harga}</td>   
        <td>${data.DataProduct[index].stok}</td>  
        <td>
            <button>edit</button>
            <button onclick="deleteData(${data.DataProduct[index].id})">delete</button>
        </td>   
    </tr>`;
    }
  });
function addData() {
  const getInputId = document.getElementById("input-id");
  const getInputNama = document.getElementById("input-nama");
  const getInputHarga = document.getElementById("input-harga");
  const getInputStok = document.getElementById("input-stok");

  const data = {
    id: getInputId.value,
    nama: getInputNama.value,
    harga: getInputHarga.value,
    stok: getInputStok.value,
  };
  fetch(apiUrl + "post-product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  window.location.reload();
}
function deleteData(id) {
  fetch(apiUrl + "delete-product", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  window.location.reload();
}

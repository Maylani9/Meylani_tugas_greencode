const apiUrl = "http://localhost:3000/";
const getData = document.getElementById("data");
fetch(apiUrl + "get-data")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for (let index = 0; index < data.dataArray.length; index++) {
      getData.innerHTML += `<tr>
      <td>${index + 1}</td>
      <td>${data.dataArray[index].id}</td>
      <td>${data.dataArray[index].nama}</td>
      <td>${data.dataArray[index].code}</td>
      <td>${data.dataArray[index].category}</td>
      <td>${data.dataArray[index].price}</td>

      </tr>`;
    }
  });
function addData() {
  const getInputId = document.getElementById("input-id");
  const getInputNama = document.getElementById("input-nama");
  const getInputCode = document.getElementById("input-code");
  const getInputCategory = document.getElementById("input-category");
  const getInputPrice = document.getElementById("input-price");

  const data = {
    id: getInputId.value,
    nama: getInputNama.value,
    code: getInputCode.value,
    category: getInputCategory.value,
    price: getInputPrice.value,
  };

  fetch(apiUrl + "post-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  window.location.reload();
}

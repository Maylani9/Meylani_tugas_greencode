const apiUrl = "http://localhost:3000/";
const getData = document.getElementById("data");
fetch(apiUrl + "get-data")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for (let index = 0; index < data.dataArray.length; index++) {
      console.log(data.dataArray.length);
      getData.innerHTML += `<tr>
               
        <td>${data.dataArray[index].id}</td>   
        <td>${data.dataArray[index].nama}</td>   
        <td>${data.dataArray[index].number_phone}</td>   
        <td>${data.dataArray[index].point}</td>  
        <td>
            <button>edit</button>
            <button onclick="deleteData(${data.dataArray[index].id})">delete</button>
        </td>   
    </tr>`;
    }
  });

function deleteData(id) {
  fetch(apiUrl + "delete-data", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  window.location.reload();
}

function addData() {
  const getInputId = document.getElementById("input-id");
  const getInputNama = document.getElementById("input-nama");
  const getInputNumber_Phone = document.getElementById("input-number_phone");
  const getInputPoint = document.getElementById("input-point");

  const data = {
    id: getInputId.value,
    nama: getInputNama.value,
    number_phone: getInputNumber_Phone.value,
    point: getInputPoint.value,
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

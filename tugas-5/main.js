// const getinput1 = document.querySelector("#input1");
// const getinput2 = document.querySelector("#input2");
// const gethasil = document.querySelector("#hasil");

// const getbtn = document.getElementById("btn");
// getbtn.addEventListener("click", hitung);

// function hitung() {
//   const input1Value = document.getElementById("input1").value;
//   const input2Value = document.getElementById("input2").value;
//   const angka1 = Number(input1Value);
//   const angka2 = Number(input2Value);
//   const hasil = angka1 + angka2;
//   document.getElementById("hasil").value = hasil;
// }
// const getreset = document.getElementById("reset");
// getreset.addEventListener("click", resetFunction);
// function resetFunction() {
//   document.getElementById("input1").value = null;
//   document.getElementById("input2").value = null;
//   document.getElementById("hasil").value = null;
// }
const getkali = document.getElementById("kali");
getkali.addEventListener("click", kaliFunction);
function kaliFunction() {
  const input1Value = document.getElementById("input1").value;
  const input2Value = document.getElementById("input2").value;
  const angka1 = Number(input1Value);
  const angka2 = Number(input2Value);
  const hasil = angka1 * angka2;
  document.getElementById("hasil").value = hasil;
}
const getbagi = document.getElementById("bagi");
getbagi.addEventListener("click", bagiFunction);
function bagiFunction() {
  const input1Value = document.getElementById("input1").value;
  const input2Value = document.getElementById("input2").value;
  const angka1 = Number(input1Value);
  const angka2 = Number(input2Value);
  const hasil = angka1 / angka2;
  document.getElementById("hasil").value = hasil;
}
const getkurang = document.getElementById("kurang");
getkurang.addEventListener("click", kurangFunction);
function kurangFunction() {
  const input1Value = document.getElementById("input1").value;
  const input2Value = document.getElementById("input2").value;
  const angka1 = Number(input1Value);
  const angka2 = Number(input2Value);
  const hasil = angka1 - angka2;
  document.getElementById("hasil").value = hasil;
}
const gettambah = document.getElementById("tambah");
gettambah.addEventListener("click", tambahFunction);
function tambahFunction() {
  const input1Value = document.getElementById("input1").value;
  const input2Value = document.getElementById("input2").value;
  const angka1 = Number(input1Value);
  const angka2 = Number(input2Value);
  const hasil = angka1 + angka2;
  document.getElementById("hasil").value = hasil;
}

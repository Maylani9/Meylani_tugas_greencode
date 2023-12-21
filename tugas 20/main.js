// 1.	Jika var angka = 15;, buat pernyataan if-else untuk mengecek apakah angka tersebut genap atau ganjil.//
var angka = 16;
if (angka % 2 === 0) {
  console.log("Angka tersebut genap");
} else {
  console.log("Angka tersebut ganjil");
}
// 2.	Jika var nilai = 75;, buat pernyataan if-else untuk menentukan apakah nilai tersebut "Lulus" atau "Tidak Lulus" (dengan batas kelulusan 60).//
var nilai = 75;
if (nilai >= 60) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}
// 3.	Jika var usia = 20;, buat pernyataan if-else untuk mengecek apakah seseorang sudah mencapai usia dewasa (>= 18) atau belum//
var usia = 20;
if (usia >= 18) {
  console.log("sudah dewasa");
} else {
  console.log("belum dewasa");
}
// 4.	Jika var password = "admin";, buat pernyataan if-else untuk memeriksa apakah kata sandi adalah "admin" atau tidak.
var password = "admin";
if (password === "admin") {
  console.log("Kata sandi adalah admin");
} else {
  console.log("Kata sandi tidak adalah admin");
}
// 5.	Jika var saldo = 1000;, buat pernyataan if-else untuk memeriksa apakah saldo mencukupi untuk melakukan penarikan sebesar 500.
var saldo = 1000;
if (saldo > 500) {
  console.log("saldo mencukupi penarikan");
} else {
  console.log("saldo tidak cukup penarikan");
}
// 6.	Jika var bilangan = -8;, buat pernyataan if-else untuk mengecek apakah bilangan tersebut positif, negatif, atau nol.
var bilangan = -8;
if (bilangan > 0) {
  console.log("Bilangan tersebut positif");
} else if (bilangan < 0) {
  console.log("Bilangan tersebut negatif");
} else {
  console.log("Bilangan tersebut nol");
}
// 7.	Jika var angka1 = 10; dan var angka2 = 20;, buat pernyataan if-else untuk menentukan apakah angka1 lebih besar, lebih kecil, atau sama dengan angka2
var angka1 = 10;
var angka2 = 20;
if (angka1 > angka2) {
  console.log("angka1 lebih besar");
} else if (angka1 < angka2) console.log("angka1 lebih kecil");
else {
  console.log("anga1 dan angka2 sama");
}
// 8.	Jika var temperature = 25;, buat pernyataan if-else untuk menentukan apakah suhu tersebut termasuk kategori "Panas", "Sejuk", atau "Dingin" (dengan batas 20 dan 30).
var temperature = 25;
if (temperature > 30) {
  console.log("Suhu  Panas");
} else if (temperature > 20) {
  console.log("Suhu  Sejuk");
} else {
  console.log("Suhu  Dingin");
}
// 9.	Jika var nilai = "B";, buat pernyataan if-else untuk menentukan apakah nilai tersebut "A", "B", "C", atau "Lainnya".
var nilai = "B";
if (nilai === "A") {
  console.log("Nilai adalah A");
} else if (nilai === "B") {
  console.log("Nilai adalah B");
} else if (nilai === "C") {
  console.log("Nilai adalah C");
} else {
  console.log("Nilai adalah Lainnya");
}
// 10.	Jika var tahun = 2023;, buat pernyataan if-else untuk menentukan apakah tahun tersebut adalah tahun kabisat atau bukan.

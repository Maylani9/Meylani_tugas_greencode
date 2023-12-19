// soal no 1 Buatlah array angka [1, 2, 3, 4, 5] dan gunakan for i untuk mencetak setiap elemennya.
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// soal no 2 Buat array string ['apel', 'jeruk', 'pisang'] dan gunakan for i untuk mencetak setiap bua
const buah = ["apel", "jeruk", "pisang"];
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
// soal no 3 	Buat array angka [10, 20, 30, 40, 50] dan gunakan for i untuk mengalikan setiap elemen dengan 2 dan mencetak hasilnya
const angka = [10, 20, 30, 40, 50];
let hasil = [];
for (let i = 0; i < angka.length; i++) {
  hasil.push(angka[i] * 2);
}
console.log(hasil);

// soal no 4 Buat array string ['JavaScript', 'Python', 'Java'] dan gunakan for i untuk mencetak panjang setiap kata.
const bahasa = ["Javascript", "python", "java"];
for (let i = 0; i < bahasa.length; i++) {
  console.log(bahasa[i].length);
}
// soal no 5 	Buat array angka [3, 6, 9, 12, 15] dan gunakan for i untuk menjumlahkan setiap elemen dengan elemen sebelumnya, lalu cetak hasilnya.
const angka1 = [3, 6, 9, 12, 15];
let hasil1 = [];
for (let i = 1; i < angka1.length; i++) {
  hasil1.push(angka1[i] + angka1[i - 1]);
}
console.log(hasil1);
//soal no 6	Buat array string ['Mobil', 'Motor', 'Sepeda'] dan gunakan for i untuk menambahkan kata "Baru" di depan setiap elemen, lalu cetak array hasilnya.
const kendaraan = ["Mobil", "Motor", "Sepeda"];
let hasil3 = [];
for (let i = 0; i < kendaraan.length; i++) {
  hasil3.push("Baru" + " " + kendaraan[i]);
}
console.log(hasil3);

// soal no 7 	Buat array angka [2, 4, 6, 8, 10] dan gunakan for i untuk memeriksa apakah setiap elemen merupakan bilangan genap atau tidak, lalu cetak hasilnya.
const angka2 = [2, 4, 6, 8, 10];

for (let i = 0; i < angka.length; i++) {
  if (angka2[i] % 2 === 0) {
    console.log(angka2[i] + " adalah bilangan genap");
  } else {
    console.log(angka2[i] + " adalah bilangan ganjil");
  }
}
//  soal no 8 Buat array string ['Biru', 'Merah', 'Hijau'] dan gunakan for i untuk mencetak setiap warna dalam bentuk kalimat, misalnya "Warna Biru".
const warna = ["Biru", "Merah", "Hijau"];
let hasil4 = [];
for (let i = 0; i < warna.length; i++) {
  hasil4.push("warna" + " " + warna[i]);
}
console.log(hasil4);

// soal no 9 Buat array angka [1, 2, 3, 4, 5] dan gunakan for i untuk mencetak setiap elemen setelah ditambah 10.
const angka3 = [1, 2, 3, 4, 5];
for (let i = 0; i < angka.length; i++) {
  console.log(angka[i] + 10);
}
// soal no 10 Buat array string ['Kucing', 'Anjing', 'Ikan'] dan gunakan for i untuk mencetak setiap hewan dalam bentuk huruf besar
const hewan = ["kucing", "anjing", "ikan"];
for (let i = 0; i < hewan.length; i++) {
  console.log(hewan[i].toUpperCase());
}
// soal no 11 Buat array angka [5, 10, 15, 20, 25] dan gunakan for i untuk mencetak setiap elemen dalam bentuk "Angka ke-5 adalah 5", "Angka ke-10 adalah 10", dan seterusnya.
const array1 = [5, 10, 15, 20, 25];
for (let i = 0; i < array1.length; i++) {
  console.log("Angka ke-" + array1[i] + " adalah " + array1[i]);
}
// soal no 12 Buat array objek [{nama: 'John', usia: 30}, {nama: 'Jane', usia: 25}, {nama: 'Doe', usia: 35}] dan gunakan for i untuk mencetak setiap objek dalam bentuk "Nama John, usia 30 tahun".
const nama = [
  { nama: "John", usia: 30 },
  { nama: "Jane", usia: 25 },
  { nama: "Doe", usia: 35 },
];
for (let i = 0; i < nama.length; i++) {
  console.log("Nama " + nama[i].nama + ", usia " + nama[i].usia + " tahun");
}
// soal no 13 Buat array angka [2, 4, 6, 8, 10] dan gunakan for i untuk mencetak jumlah dari semua elemennya.
const array3 = [2, 4, 6, 8, 10];
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}
//  soal no 14 	Buat array string ['Senin', 'Selasa', 'Rabu'] dan gunakan for i untuk mencetak setiap hari dalam bentuk "Hari Senin adalah hari kerja".
const hari = ["Senin", "Selasa", "Rabu"];
for (let i = 0; i < hari.length; i++) {
  console.log("Hari " + hari[i] + " adalah hari kerja");
}
// soal no 15 Buat array angka [1, 3, 5, 7, 9] dan gunakan for i untuk mencetak setiap elemen dan menyebutkannya sebagai bilangan ganjil atau genap.
const angka4 = [1, 3, 5, 7, 9];

for (let i = 0; i < angka4.length; i++) {
  if (angka4[i] % 2 === 0) {
    console.log(angka4[i] + " adalah bilangan genap");
  } else {
    console.log(angka4[i] + " adalah bilangan ganjil");
  }
}

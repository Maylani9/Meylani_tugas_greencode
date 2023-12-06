//1.Buatlah program yang menggunakan for loop untuk menampilkan angka 1 hingga 5 ke konsol//
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//2.Buatlah program yang menggunakan for loop untuk menghitung jumlah angka dari 1 hingga 10
let hasil = 0;
let array = [];
for (let index = 1; index <= 10; index++) {
  hasil += index;
  array.push(hasil);
}
console.log(array);

// 3.	Buatlah program yang menggunakan for loop untuk menampilkan tabel perkalian 5 (5, 10, 15, ...) hingga 50 ke konsol.
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}
//4.Buatlah program yang menggunakan for loop untuk menjumlahkan angka genap dari 1 hingga 10 dan menampilkan hasilnya ke konsol.

let jumlahGenap = 0;
let arr = [];
for (let i = 2; i <= 10; i += 2) {
  jumlahGenap += i;
  arr.push(jumlahGenap);
}
console.log(arr);

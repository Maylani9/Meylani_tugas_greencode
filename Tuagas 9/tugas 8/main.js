//1.Menentukan sebuah angka negatif atau positif menggunakan if-else//
let angka = 10;

if (angka > 0) {
  console.log("angka", angka, "positif");
} else if (angka < 0) {
  console.log("angka", angka, "negatif");
}

//2.Menentukan angka lebih besar//
let angka1 = 100;
let angka2 = 90;

if (angka1 > angka2) {
  console.log(angka1, "lebih besar dari", angka2);
} else if (angka1 < angka2) {
  console.log(angka1, "lebih kecil dari", angka2);
}

//3. Menentukan jumlah kata lebih dari 5//
let kata = "MeyImut";

if (kata.length > 5) {
  console.log("kata", "memiliki jumlah lebih dari 5 karakter");
} else if (kata.length <= 5) {
  console.log("kata", "memiliki jumlah kurang dari 5 karakter");
}

// 4. Memeriksa sebuah tahun//
let tahun = 2019;

if (tahun % 4 === 0 && tahun % 100 !== 0 && tahun % 400 === 0) {
  console.log(tahun, "adalah tahun kabisat");
} else {
  console.log(tahun, "adalah bukan tahun kabisat");
}

//5. Menghitung biaya pengiriman barang//
let beratBarang = 9;

if (beratBarang >= 5) {
  console.log(beratBarang, "biaya pengiriman adalah 50.000");
} else if (beratBarang < 5) {
  console.log(beratBarang, "biaya pengiriman adalah 20.000");
}

//6 . Memeriksa apakah login berhasil atua gagal//
let usernameBenar = "Meylani";
let passwordBenar = "Mey12345";

let usernameInput = "Meylani";
let passwordInput = "Mey12345";

if (usernameInput === usernameBenar && passwordInput === passwordBenar) {
  console.log("Login Berhasil");
} else if (usernameInput === usernameSalah && passwordInput === passwordSalah) {
  console.log("Login Gagal");
}

if (usernameInput === usernameBenar && passwordInput === passwordBenar) {
  console.log("Login Gagal");
} else if (usernameInput === usernameSalah && passwordInput === passwordSalah) {
  console.log("Login Berhasil");
}

//7. Menentukan bilangan bulat//
let bilangan = 12;

if (bilangan % 2 === 0) {
  console.log(bilangan, "adalah bilangan genap");
} else {
  console.log(bilangan, "adalah bilangan ganjil");
}

//8. Menentukan bilangan buka yang memiliki kelipatan 3 atau 5//
let bilanganBilangan = 2;

if (bilanganBilangan % 3 === 0) {
  console.log(bilanganBilangan, "adalah kelipatan dari 3");
} else if (bilanganBilangan % 3 === 0 && bilanganBilangan % 5 === 0) {
  console.log(bilanganBilangan, "adalah kelipatan dari 3 dan 5");
} else {
  console.log(bilanganBilangan, "adalah kelipatan dari 5");
}

//9.Menentukan sebuah kata palindrom (bacaan dari depan maupun dari belakang sama)//
let kataKata = "laba-laba";

if ((kataKata = true)) {
  console.log(kataKata, "adalah palindrom");
} else {
  console.log(kataKata, "bukan palindrom");
}

//10. Memeriksa apakah seorang pengguna memiliki cukup usia untuk mendapatkan SIM//
let pengguna = 18;

if (pengguna > 17) {
  console.log(pengguna, "cukup usia untuk mendapatkan SIM");
} else if (pengguna < 17) {
  console.log(pengguna, " belum cukup usia untuk mendapatkan SIM");
}

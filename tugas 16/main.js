// soal no 1 	Buat fungsi bernama penjumlahan yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya.
function penjumlahan(a, b) {
  return a + b;
}

console.log(penjumlahan(9, 2));

//  soal no 2 Buat fungsi pengurangan untuk mengurangkan dua angka.
function pengurangan(a, b) {
  return a - b;
}
console.log(pengurangan(10, 2));

// soal no 3.Tulis fungsi perkalian yang mengalikan dua angka.
function perkalian(a, b) {
  return a * b;
}
console.log(perkalian(11, 2));

// soal no 4.Buat fungsi pembagian untuk membagi dua angka.
function pembagian(a, b) {
  return a / b;
}
console.log(pembagian(12, 2));

// soal no 5.Buat fungsi pangkat yang menerima dua parameter dan mengembalikan hasil pangkat.
function pangkat(a, b) {
  return a ** b;
}

console.log(pangkat(13, 3));

// soal no 6.Implementasikan fungsi luasPersegiPanjang untuk menghitung luas persegi panjang dengan menerima panjang dan lebar sebagai parameter.
function persegiPanjang(panjang, lebar) {
  return panjang * lebar;
}
console.log(persegiPanjang(10, 5));

// soal no 7.Buat fungsi luasLingkaran yang menerima jari-jari dan menghitung luas lingkaran.
function luasLingkaran(r) {
  return Math.PI * r * r;
}

console.log(luasLingkaran(7));

// soal no 8.Tulis fungsi kelilingSegitiga yang menerima panjang sisi-sisi segitiga dan mengembalikan kelilingnya.
function kelilingSegitiga(a, b, c) {
  return a + b + c;
}

console.log(kelilingSegitiga(8, 7, 9));

// soal no 9.Buat fungsi bilanganTerbesar yang menerima dua angka dan mengembalikan bilangan terbesar di antara keduanya.
function bilanganTerbesar(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(bilanganTerbesar(8, 7));

// soal no 10 Implementasikan fungsi isGenap untuk menentukan apakah suatu angka genap
function isGenap(angka) {
  if (angka % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isGenap(4));
console.log(isGenap(7));

// soal no 11.Buat fungsi isGanjil untuk mengecek apakah suatu angka ganjil.
function isGanjil(angka) {
  return angka % 2 == 1;
}
let angka1 = 8;
let angka2 = 5;

console.log(angka1 + " adalah angka ganjil: " + isGanjil(angka1));
console.log(angka2 + " adalah angka ganjil: " + isGanjil(angka2));
// soal no 12.Buat fungsi reverseString yang menerima sebuah string dan mengembalikan string tersebut dibalik.
function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

let kata = "meymey";
let kataTerbalik = reverseString(kata);
console.log("String Terbalik: " + kataTerbalik);

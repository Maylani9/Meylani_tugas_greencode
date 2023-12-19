// 3.	Buatlah fungsi isEven yang menerima satu parameter (angka)
// dan mengembalikan true jika angka tersebut genap, dan false jika ganjil.
function isEven(angka) {
  if (angka % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));

/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {String}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {String}
*/
const expectedPassword = 'superpassword';

/*Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan email yang didapatkan saat tombol ditekan.
  * @constant {String}
  */
  const email = inputEmailElement.value;
  
  /**
  * Membuat variabel password untuk menyimpan password yang didapatkan saat tombol ditekan.
  * @constant {String}
  */
  const password = inputPasswordElement.value;
  
  /*Memastikan nilai email dan password sesuai dengan nilai yang tersimpan*/
  if (email == expectedEmail && password == expectedPassword) {
    
    /*Jika sesuai maka akan masuk ke halaman home*/
    goToHome();
    
    /*Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah*/
  } else {
    showPopUp();
  }
});

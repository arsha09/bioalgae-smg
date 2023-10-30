function mOver(obj) {
obj.innerHTML = "Maaf Belum Tersedia"
}

function mOut(obj) {
    obj.innerHTML = "Lihat Profil"
}

function mOver2(obj) {
    obj.innerHTML = "Software and Digital Services"
}

function mOut2(obj) {
    obj.innerHTML = "Selamat Datang di Alopedia!"
}

function btn_wa() {
          var nomor = document.getElementById('nomor').value;
          var nama = document.getElementById('nama').value;
          var pesan = document.getElementById('pesan').value;
          var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text=*HALO ADMIN ALOPEDIA!*%0aPerkenalkan%20saya%20'+nama+',%0a'+pesan);
          if (win) {
              //Browser has allowed it to be opened
              win.focus();
          } else {
              //Browser has blocked it
              alert('Please allow popups for this website');
          }
      return false;
      }
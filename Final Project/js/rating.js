
function radioCek() {
  let radioBtn =document.getElementsByClassName('radioBtn')
  let radioChechked = ''; // Harus declare string kosong sebelum direturn;
  for (let i=0; i<radioBtn.length; i++) {
    if (radioBtn[i].checked){
      radioChechked = radioBtn[i].value; // String kosong tadi diisi dengan value
    }
  }
  return radioChechked; //return variable
}

function comment(){
  let inputComment = document.getElementById ('komentar')
  return inputComment.value.length;
}


function failedComment(){
  let failed = false;
  if (comment()<5){
    alert('minimal komentar adalah 5 karakter')
    return failed = true;
  }if (comment()>200){
    alert ('maksimal komentar adalah 200 karakter')
    return failed = true;
  }
  return failed
}

function submitComrate (){
  if(!failedComment()){
    let inputComment = document.getElementById ('komentar')
    let textComment = inputComment.value; //Harus simpan value dalam variable baru lagi
    let checkboxComment = radioCek(); // //Harus simpan value dalam variable baru lagi

    //Menggunakan window location tujuan page yang akan menggunakan data. Kirim data dengan format seperti dibawah ini.
    window.location.href = 'produk.html' + '?' + checkboxComment + '+' + textComment;
  }
}


function cancelRating() {
  let cancel = confirm("Anda akan meninggalkan halaman tanpa memberikan Review");
  if (cancel == true) {
    console.log ("Berhasil meninggalkan halaman");
    window.location = 'main.html'
  } else {
      console.log ("gagal untuk meninggalkan halaman");
  }
}






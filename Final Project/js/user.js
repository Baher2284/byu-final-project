let table = document.getElementById("table");
let barisIndex = document.getElementById("table");
let rowSelectedYa = "";
let asal = document.getElementById("inputAsal")
let tujuan= document.getElementById("inputTujuan")
let alamat = document.getElementById("alamat")
let penerima = document.getElementById("penerima")
let telp = document.getElementById("telp")
let berat = document.getElementById("berat")




function failedOrder () {
  let failed=false;

  if (asal.value===""){
  alert ('Asal Pengiriman tidak boleh kosong');
  return failed=true;
  } if (tujuan.value===""){
  alert ('Tujuan Pengiriman tidak boleh kosong');
  return failed=true;
  } if (penerima.value===""){
  alert ('Nama Penerima tidak boleh kosong');
  return failed=true;
  } if (telp.value===""){
  alert ('No. Telp Penerima tidak boleh kosong');
  return failed=true;
  } if (berat.value===""){
  alert ('Berat Paket tidak boleh kosong');
  return failed=true;
  } if (alamat.value===""){
  alert ('Alamat Pengiriman tidak boleh kosong');
  return failed=true;
  } if (berat.value==0) {
  alert ('Berat Paket minimal adalah 1 kg');
  return failed=true;    
  } if(berat.value>50){
  alert ('Berat Paket Maksimal 50 Kg');
  return failed=true;
  }
  return failed;
}    



function pricing (){
    
    let hargaJabodetabek = 5000;
    let hargaJawa = 6000;
    let hargaSumatera = 7000;
    let harga = [];

    if (asal.value == 'Jabodetabek' && tujuan.value=='Jabodetabek') {
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value =(hargaJabodetabek *berat.value)));   
   } if (asal.value == 'Jabodetabek' && tujuan.value =='Jawa'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaJabodetabek *berat.value) + (hargaJawa*berat.value)));
   } if (asal.value == 'Jabodetabek' && tujuan.value =='Sumatera'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaJabodetabek *berat.value) + (hargaSumatera*berat.value)));
   } if (asal.value == 'Jawa' && tujuan.value =='Jawa'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaJawa *berat.value)));
   } if (asal.value == 'Jawa' && tujuan.value =='Jabodetabek'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaJawa *berat.value) + (hargaJabodetabek*berat.value)));
   } if (asal.value == 'Jawa' && tujuan.value =='Sumatera'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaJawa *berat.value) + (hargaSumatera*berat.value)));
   } if (asal.value == 'Sumatera' && tujuan.value =='Sumatera'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaSumatera*berat.value)));
   } if (asal.value == 'Sumatera' && tujuan.value =='Jawa'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaSumatera*berat.value)+(hargaJawa *berat.value)));
   } if (asal.value == 'Sumatera' && tujuan.value =='Jabodetabek'){
        alert('Transaksi Berhasil, Silahkan melakukan pembayaran sebesar Rp.'+(harga.value = (hargaSumatera*berat.value)+(hargaJabodetabek *berat.value)));
   }
   
   return harga.value
   
}

function addOrder (){
       
    if(!failedOrder()){
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td"); 
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
          
        
        td1.innerHTML = asal.value;
        td2.innerHTML = tujuan.value;
        td3.innerHTML = alamat.value;
        td4.innerHTML = penerima.value;
        td5.innerHTML = telp.value;
        td6.innerHTML = berat.value;
        td7.innerHTML = pricing();
        
       
        
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3).style.textAlign = 'left';
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);
        table.children[0].appendChild(row);
        
        
        pilihBaris();
        hapusForm()
        
    }
}

function pilihBaris(){
    for(let i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            //MEMILIH BARIS DI INDEX           
            barisIndex = this.rowIndex;
            document.getElementById("inputAsal").value = this.cells[0].innerHTML;
            document.getElementById("inputTujuan").value = this.cells[1].innerHTML;
            document.getElementById("alamat").value = this.cells[2].innerHTML;
            document.getElementById("penerima").value = this.cells[3].innerHTML;
            document.getElementById("telp").value = this.cells[4].innerHTML;
            document.getElementById("berat").value = this.cells[5].innerHTML;
            
        };
    }
    return barisIndex;
}

// Buat Function baru khusus untuk pilih baris delete feature
function pilihBarisForDelete(){
    for(let i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            //MEMILIH BARIS DI INDEX           
            rowSelectedYa = this.rowIndex;
            console.log(rowSelectedYa);
        };
    }
    return rowSelectedYa;
}
pilihBaris();

//EDIT BARIS

// let asal = document.getElementById("inputAsal");
// let tujuan = document.getElementById("inputTujuan");
// let alamat = document.getElementById("alamat");
// let penerima = document.getElementById("penerima");
// let telp = document.getElementById("telp");
// let berat = document.getElementById("berat");


function editBaris(){
    if((asal.value==="")&&(tujuan.value==="")&&(alamat.value==="")&&(penerima.value==="")&&(telp.value==="")&&(berat.value==="")){
     return alert('Silahkan pilih baris yang ingin di edit')
    }
    if(!failedOrder()){
      let submitEdit = confirm("Mohon konfirmasi mengedit Pesanan");
      if (submitEdit == true) {
        console.log ("Berhasil mengedit Pesanan");
        table.rows[barisIndex].cells[0].innerHTML = asal.value
        table.rows[barisIndex].cells[1].innerHTML = tujuan.value
        table.rows[barisIndex].cells[2].innerHTML = alamat.value
        table.rows[barisIndex].cells[3].innerHTML = penerima.value
        table.rows[barisIndex].cells[4].innerHTML = telp.value
        table.rows[barisIndex].cells[5].innerHTML = berat.value
        table.rows[barisIndex].cells[6].innerHTML = pricing();
        hapusForm()
    } else{
      console.log("gagal mengedit pesanan")
    }
  }
}

//HAPUS BARIS
function hapusBaris(){
  //Chek dulu apakah row sudah dipilih
  if (pilihBarisForDelete() === '') {
   alert('Silahkan pilih baris yang akan dihapus');
   pilihBarisForDelete();
  } else {
   //Jika sudah dipilih akan masuk kesini
   deleteConfirm()
  }
}

//HAPUS FORM
function hapusForm(){
    document.getElementById("inputAsal").value = "";
    document.getElementById("inputTujuan").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("penerima").value = "";
    document.getElementById("telp").value = "";
    document.getElementById("berat").value = "";
    
}

//confirm Edit

// function editConfirm(){
//     let submitEdit = confirm("Mohon konfirmasi mengedit Pesanan");
//     if (submitEdit == true) {
//       console.log ("Berhasil mengedit Pesanan");
//     } else {
//         console.log("gagal mengedit pesanan")
//     }
// }

//confirm Delete

function deleteConfirm(){
    let submitDelete = confirm("Mohon konfirmasi menghapus Pesanan baris No: " +rowSelectedYa);
    if (submitDelete == true) {
      table.deleteRow(pilihBarisForDelete());
      console.log ("Berhasil menghapus Pesanan");
    } else {
        console.log("gagal menghapus pesanan")
    }
}


//FUNGSI give Comment

function giveComment(){
    let gvComment = confirm("Apakah Anda Bersedia Memberikan Review Kepada Kami");
    if (gvComment == true) {
      console.log ("thanks");
      window.location = "rating.html";
    } else {
        window.location = "main.html";
    }
}

//FUNGSI SIGN OUT
function signOut() {
    let reply = confirm("Silahkan konfirmasi untuk meninggalkan halaman ini");
    if (reply == true) {
      console.log ("Berhasil meninggalkan halaman");
      giveComment()
    } else {
        console.log ("gagal untuk meninggalkan halaman");
    }
  }

  



  


















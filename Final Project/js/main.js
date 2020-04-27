
//FUNGSI REGISTRASI 

let database = [
    {
        nama : 'Bayu Aja',
        email: 'bayu@gmail.com',
        password : '12345',
        page : 'order.html'
    },{
        nama : 'Kakak David',
        email: 'david@gmail.com',
        password : '12345',
        page : 'order.html'
    }

];


//FUNGSI REGISTER

let names = document.getElementById ('nama')
let emails = document.getElementById("email")
let passwords = document.getElementById("pass")
let reg = /\@/;



function failedDatabase() {
    let failed = false;
    
    if (names.value===""){
        alert("Nama tidak boleh kosong");
        return failed = true;
    } if (names.value.length<4) {
        alert("minimal nama 4 karakter!");
        return failed = true;
    } if (emails.value==="") {
        alert("Email tidak boleh kosong");  
        return failed = true; 
    } if (reg.test(emails.value) == false) {
        alert("Email harus menggunakan format email");
        return failed = true;
    } if (passwords.value==="") {
        alert("Password tidak boleh kosong");
        return failed = true;
    }if (passwords.value.length<5) {
        alert("minimal password 5 karkater");
        return failed = true;
    } 
    return failed;
}   

function newDatabase(){
    if(!failedDatabase()){
        alert ('Mohon menunggu Approval untuk dapat Login sebagai Admin')
        database.unshift({
        nama : names.value,
        email: emails.value,
        password: passwords.value,
        page : 'order.html'
        })
    }
        console.log(database); 
        
}
    



//FUNGSI CEK HARGA

let asal = document.getElementById ('inputState')
let tujuan = document.getElementById ('inputTujuan')
let berat = document.getElementById ('weight')
let harga = document.getElementById ('price')
let hargaJabodetabek = 5000;
let hargaJawa = 6000;
let hargaSumatera = 7000;


function cekHarga() {

    if (asal.value=="") {
        return alert ('Pilih Lokasi Asal');
    }if (tujuan.value=="") {
        return alert ('Pilih tujuan pengiriman');
    }if (berat.value==0) {
        alert ('Berat Paket minimal adalah 1 kg');
    }if(berat.value>50){
        alert ('Berat Paket Maksimal 50 Kg');
    }if (asal.value == 'Jabodetabek' && tujuan.value=='Jabodetabek'){
        harga.value = (hargaJabodetabek *berat.value);
    }if (asal.value == 'Jabodetabek' && tujuan.value =='Jawa'){
        harga.value = (hargaJabodetabek *berat.value) + (hargaJawa*berat.value);
    }if (asal.value == 'Jabodetabek' && tujuan.value =='Sumatera'){
        harga.value = (hargaJabodetabek *berat.value) + (hargaSumatera*berat.value);
    }if (asal.value == 'Jawa' && tujuan.value =='Jawa'){
        harga.value = (hargaJawa *berat.value);
    }if (asal.value == 'Jawa' && tujuan.value =='Jabodetabek'){
        harga.value = (hargaJawa *berat.value) + (hargaJabodetabek*berat.value);
    }if (asal.value == 'Jawa' && tujuan.value =='Sumatera'){
        harga.value = (hargaJawa *berat.value) + (hargaSumatera*berat.value);
    }if (asal.value == 'Sumatera' && tujuan.value =='Sumatera'){
        harga.value = (hargaSumatera*berat.value)
    }if (asal.value == 'Sumatera' && tujuan.value =='Jawa'){
        harga.value = (hargaSumatera*berat.value)+(hargaJawa *berat.value);
    }if (asal.value == 'Sumatera' && tujuan.value =='Jabodetabek'){
        harga.value = (hargaSumatera*berat.value)+(hargaJabodetabek *berat.value);
    }
}



//FUNGSI LOGIN

function afterClick() {

let inputUser = document.getElementById ('userEmail');
let inputPass = document.getElementById ('userPass')

 function user () {
     return inputUser.value
 }  
 function pass () {
     return inputPass.value
 }
    for (i=0; i<database.length; i++) {
        if (user() === database[i].email && pass() ===database[i].password) {
            return alert(('selamat datang ')+(database[i].nama))(window.location = database[i].page)
        }       
    }
        if (user()===('') || pass ()===('')) {
        alert ('Email dan Password tidak boleh Kosong')
        }
        else {
            alert ('account tidak terdaftar silahkan Register terlebih dahulu')
            document.getElementById ('userEmail').value ="";
            document.getElementById ('userPass').value ="";
        }
}

  
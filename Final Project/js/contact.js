let contactList=[]
let nama =document.getElementById ('name');
let telepon =document.getElementById ('noTelp');
let email =document.getElementById ('emailAddress');
let pesan =document.getElementById ('pesan');
let reg = /\@/;

function failedContact(){
    let failed = false;

    if (nama.value==""){
        alert ('Nama tidak boleh kosong')
        return failed = true;
    } if (nama.value.length<4) {
        alert("minimal nama 4 karakter!");
        return failed = true;
    } if (email.value=="") {
        alert("Email tidak boleh kosong");
        return failed = true;  
    } if (reg.test(email.value)==false) {
        alert("Email harus menggunakan format email");
        return failed = true;
    } if (telepon.value==""){
        alert ('nomor telp tidak boleh kosong')
        return failed = true;
    } if (pesan.value.length<10){
        alert ('isi pesan harus lebih dari 10 karakter')
        return failed = true;
    }
    return failed;
}


function successContact(){
    if(!failedContact()){
        alert('berhasil mengirim pesan')
        contactList.unshift({
            nama :nama.value,
            telp :telepon.value,
            email :email.value,
            pesan :pesan.value
        })
        console.log (contactList);
    }
}



    



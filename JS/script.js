


/*Message Us*/
function validateform() {
    const nama = document.forms['message-us']['name-input'].value;
    const birthDate = document.forms['message-us']['tanggallahir'].value;
    const gender = document.forms['message-us']['jeniskelamin'].value;
    const Message = document.forms['message-us']['pesan'].value;

    if(nama == "" || birthDate == "" || gender == "" || Message == "") {
        alert("tidak boleh kosong");
        return false;
    }

    setSenderUI(nama, birthDate, gender, Message);

    return false;
}

function setSenderUI(nama, birthDate, gender, Message) {
    document.getElementById("name").innerHTML = nama;
    document.getElementById("tgl").innerHTML = birthDate;
    document.getElementById("jkelamin").innerHTML = gender;
    document.getElementById("pesan").innerHTML = Message;
}
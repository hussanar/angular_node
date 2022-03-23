function checkMail() {
    var fname = document.getElementById('fname').value;
    var fname = fname.value;
    var email = document.getElementById('email').value;
    var mail = email.value;

    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}(com|ca|net|org|fr|us|qc.ca|gouv.qc.ca)$', 'i');
    if (!reg.test(mail) || mail == "") {
        alert("Your email address isn't valid!");
        return false;

    } else {
        alert("Email address is okay, let's send the form!");

    }
    if (fname == "") {
        alert(" Enter Your name!");

    }

}
var DomainExtensions = ['com, com.tr, net, org, org.tr, edu.tr, net.tr, tr'];

function CheckEmail() {
    var result = false;
    var TxtMailAdress = document.getElementById('TxtMailAdress');

    if (TxtMailAdress !== undefined) {
        if (TxtMailAdress !== null) {
            var Email = TxtMailAdress.value;
            if (Email === "") {
                ErrorMail('Type your email adress...');
                return;
            }
            var MailArrey = Email.split('@');
            if (MailArrey.length < 2) {
                ErrorMail('Invalid e-mail address...');
            } else {
                if (MailArrey[0] === "" || MailArrey[1] === "") {
                    ErrorMail('Invalid e-mail address...');
                } else {
                    var Extensions = MailArrey.split('.');
                    if (MailArrey.length > 1) {
                        var SelectedExtensions = "";
                        if (MailArrey === 2) {
                            SelectedExtensions = Extensions[1];
                        } else if (MailArrey === 3) {
                            SelectedExtensions = Extensions[1] + "." + Extensions[2];
                        }
                        if (SelectedExtensions = "") {
                            ErrorMail('Invalid domain adress...');
                            return;
                        } else {
                            var index = DomainExtensions.indexOf(SelectedExtensions);
                            if (index === -1) {
                                ErrorMail('Invalid domain adress...');
                                return;
                            } else {
                                ClearErrorMail();
                                result = true;
                            }

                        }
                    }
                }
            }
        }
    }
    return result;
}

function CheckPassword() {
    var result = false;
    var TxtPassword = document.getElementById('TxtPassword');
    var TxtRePassword = document.getElementById('TxtRePassword');
    var LblValidPassword = document.getElementById('LblValidPassword');
    if (TxtPassword !== undefined && TxtRePassword !== undefined) {
        if (TxtPassword !== null && TxtRePassword !== null) {
            var Password = TxtPassword.value;
            var RePassword = TxtRePassword.value;
            if (Password === "" && RePassword === "") {
                alert('Password cannot be empty...');
                return;
            }
            if (Password !== RePassword) {
                if (LblValidPassword !== undefined) {
                    if (LblValidPassword !== null) {
                        LblValidPassword.innerHTML = '<b> Passwords dont match each other...</b>';
                    }
                }

            } else {
                LblValidPassword.innerHTML = '';
                result = true;
            }
        }
    }
    return result;
}

function ErrorMail(ErrorMessage) {
    var LblValidMail = document.getElementById('LblValidMail');
    if (LblValidMail !== undefined) {
        if (LblValidMail !== null) {
            LblValidMail.innerHTML = '<b>' + ErrorMessage + '</b>';
        }
    }
}

function ClearErrorMail() {
    var LblValidMail = document.getElementById('LblValidMail');
    if (LblValidMail !== undefined) {
        if (LblValidMail !== null) {
            LblValidMail.innerHTML = '';
        }
    }
}

function CheckForm() {
    var TxtUsername = document.getElementById('TxtUsername');
    if (TxtUsername !== undefined) {
        if (TxtUsername !== null) {
            var Username = TxtUsername.value.trim();
            if (Username === "") {
                alert(' Username cannot be empty... ');
            } else {
                if (Username.length < 3) {
                    alert(' Username must be at least 3 characters... ');
                } else {

                    if (!CheckEmail()) {
                        return;
                    }

                    if (!CheckPassword()) {
                        return;
                    }

                    alert('Form submitted.');
                }
            }
        }
    }
}
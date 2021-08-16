// login pages connect to bank pages
document.getElementById('login').addEventListener('click', function() {

    const email = document.getElementById("email-input");
    const emailId = email.value
    const password = document.getElementById('password-input')
    const passwordId = password.value
    console.log(emailId, passwordId)
    if (emailId == 'admin@gmail.com' && passwordId == 'admin') {
        window.location.href = 'bank.html'
    } else {
        document.getElementById('error').style.display = 'block'
        document.getElementById('block').style.display = 'none'
    }
    email.value = '';
    password.value = '';

})
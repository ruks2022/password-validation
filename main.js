let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');
let passwordChecklist = document.querySelectorAll('.list-item');

showPasswordBtn.addEventListener('click', () => {
    //toggle item
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type ==='password' ? 'text' : 'password';
})

//strong password validation

let validationRegex = [
    { regex: /.{8,}/ }, //min 8 letter
    { regex: /[0-9]/ }, //numbers from 0-9
    { regex: /[a-z]/ }, //letter from a-z(lowercase)
    { regex: /[A-Z]/ }, //letter from a-z(uppercase)
    { regex: /[^A-Za-z0-9]/ }

]

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {

        let isValid = item.regex.test(passwordInp.value)

        if(isValid){
            passwordChecklist[i].classList.add('checked');
        }
        else{
            passwordChecklist[i].classList.remove('checked');
        }
    })
})
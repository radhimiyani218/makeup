const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirmpass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
})

function validate() {
    const nameval = name.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const confirmval = confirmpass.value.trim();

    // name
    if (nameval == "") {
        setErrorMsg(name, 'please fill the name field.');
    }
    else if ((nameval.length <= 2) || (nameval.length > 20)) {
        setErrorMsg(name, 'name length must be between 2 and 20.');
    }
    else if (!isNaN(nameval)) {
        setErrorMsg(name, 'only caractar are allowsd.');
    }
    else {
        setSuccessMsg(name);
    }

    // email
    if (emailval == "") {
        setErrorMsg(email, '**please fill the email field.');
    }
    else if ((emailval.length <= 6) || (emailval.length > 30)) {
        setErrorMsg(email, '**email length must be between 6 and 30.');
    }
    else if ((emailval.charAt(emailval.length - 4) != '.') && (emailval.charAt(emailval.length - 3) != '.')) {
        setErrorMsg(email, '**invalid position.');
    }
    else {
        setSuccessMsg(email);
    }

    // password
    if (passwordval == "") {
        setErrorMsg(password, '**please fill the password field.');
    }
    else if ((passwordval.length < 8) || (passwordval.length > 8)) {
        setErrorMsg(password, '**password length min 8.');
    }
    else {
        setSuccessMsg(password);
    }

    // confirm
    if (confirmval == "") {
        setErrorMsg(confirm, '**please fill the confirm password field.');
    }
    else if (passwordval != confirmval) {
        setErrorMsg(confirm, '**please fill the confirmpassword field.');
    }
    else {
        setSuccessMsg(confirmpass);
    }

    if (((nameval.length <= 2) || (nameval.length > 20))  ||
        ((emailval.length <= 6) || (emailval.length > 30)) ||
        ((passwordval.length < 8) || (passwordval.length > 8)) ||
        ((passwordval != confirmval))) { }
    else {
        window.location.href = "index.html"
    }

}

function setErrorMsg(input, errormsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control error";
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}



// index.js

// document.getElementById("logoes").addEventListener("click",(e)=>{
// e.preventDefault();
// boxrs  = document.querySelector(".boxrs")

// if(boxrs){
//     // boxrs.classlit.add("active")
//     boxrs.classlist.add("active")
// }
// })

function addto (){
    sidebar = document.querySelector('.sidebar')
    closeicons= document.querySelector('.colse')


        if(sidebar){
            sidebar.classList.add('active');
    
        }   
        else{
            sidebar.classList.remove('active');
    
        } 
        closeicons.addEventListener ('click' , () => {
            sidebar.classList.remove('active');
           
        })
}
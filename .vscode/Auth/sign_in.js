const logregbox= document.querySelector('.log-reg-box');
const loginlink=document.querySelector('.login-link');
const reglink=document.querySelector('.register-link');

reglink.addEventListener('click',() => {
   logregbox.classList.add('active'); 
});

loginlink.addEventListener('click',() => {
    logregbox.classList.remove('active'); 
 });
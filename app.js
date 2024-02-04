const passwordBox=document.getElementById("password")
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefgijklmnopqrstuvwxyz"
const number="123456789";
const symbol="!@#$%^&*()_+-=<>?:/.,"

const allChars=upperCase+lowerCase+number+symbol;

function createPassword(){
    let password=""
    

    while (length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value=password;
}
document.getElementById("btn").addEventListener("click",createPassword);
var lastclickBtn = sessionStorage.getItem("lastclick");
console.log(lastclickBtn);

let clickDylan = document.querySelector(".clickDylan");
let clickJuice = document.querySelector(".clickJuice");
let clickNCS = document.querySelector(".clickNCS");

clickDylan.addEventListener("click",function(){
    sessionStorage.setItem("artistClick","Dylan");
 });
 clickJuice.addEventListener("click",function(){
    sessionStorage.setItem("artistClick","Juice");
 });
 clickNCS.addEventListener("click",function(){
    sessionStorage.setItem("artistClick","NCS");
 });
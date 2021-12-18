//declaration des variables
let allArtist = document.querySelector(".allArtiste");
let allMusic = document.querySelector(".allmusic");


allArtist.addEventListener("click",function(){
   sessionStorage.setItem("lastclick","allArtist");
});

allMusic.addEventListener("click",function(){
    sessionStorage.setItem("artistClick","allMusic");
 });



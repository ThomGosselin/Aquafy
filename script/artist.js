var lastclickBtn = sessionStorage.getItem("lastclick");

let clickArtist = document.querySelectorAll(".clickArtist")
,choice;

clickArtist.forEach(element =>
   element.addEventListener("click",function(){
      choice = element.dataset.artist;
      sessionStorage.setItem("artistClick", choice);
   })
   )

/***************************************************************************************************
Description: Script permettant de savoir quel artiste parmis la liste a été choisi

'LAST UPDATE
' DATE       AUTHOR			    MODIFICATION
' ---------- ------------------ ---------------------------------------------------------------------
' 2021-12-17 Thomas Gosselin 	Optimisation générale du code
'***************************************************************************************************/
/**************************************************Déclaration de variables***********************************************/
var lastclickBtn = sessionStorage.getItem("lastclick");

let clickArtist = document.querySelectorAll(".clickArtist")
,choice;


/**************************************************Détection de quel artistes est cliquer par data-tag***********************************************/
clickArtist.forEach(element =>
   element.addEventListener("click",function(){
      choice = element.dataset.artist;
      sessionStorage.setItem("artistClick", choice);
   })
   )

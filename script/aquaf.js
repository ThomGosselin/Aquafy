//Déclarations de variable


let musicInfo = document.querySelector(".musicInfo");
let audioPlayer = document.querySelector(".audioPlayer");


audioPlayer.addEventListener("click", playMusic);
//allArtiste.addEventListener("click", loadAllArtiste);

let artistArray = [
    {
        nom: "Tout les artistes",
        genre: "Tout les genres",
        Album: "Tout les albums"
    },
    {
        nom: "Dylan Matthew",
        genre: "Pop Rap",
        Album: "Kalopsia + Anxiety + Saturday Night"
    },
    {
        nom: "Juice Wrld",
        genre: "Rap",
        Album: "Goodbye & Good Riddance"
    },
    {
        nom: "No copyright Songs",
        genre: "Tout les genres",
        Album: "Tout les albums"
    },
]

/*Loader des pages */
function loadAllArtiste(){
    let test = localStorage.getItem("test");
    console.log(test);
}



/* pour le changement de la balise title */
let titlePage = document.querySelector("head title");


titlePage.textContent = "Aquafy | Test du script";
/****************Visualizer*****************/



function playMusic(){
    console.log("allo");
}

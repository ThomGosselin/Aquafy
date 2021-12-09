//Déclarations de variable
let musicInfo = document.querySelector(".musicInfo");
let audioPlayer = document.querySelector(".audioPlayer");
audioPlayer.addEventListener("click", playMusic);

let allMusicArray=[
    {
        nom = "Drown",
        src = "url(../music/DylanMathew/D1.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan1"
    },
    {
        nom = "Don't Forget",
        src = "url(../music/DylanMathew/D2.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan2"  
    },
    {
        nom = "The Fall",
        src = "url(../music/DylanMathew/D3.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan3" 
    },
    {
        nom = "Midnight In Tokyo",
        src = "url(../music/DylanMathew/D4.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan4"  
    },
    {
        nom = "Anxiety",
        src = "url(../music/DylanMathew/anxiety.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan5"  
    },
    {
        nom = "Saturday Night",
        src = "url(../music/DylanMathew/SaturdayNight.mp3)",
        auteur = "Dylan Matthew",
        couleurBG = "#fff",
        selector = "dylan6"  
    },
    {
        nom = "All girls Are the Same",
        src = "url(../music/Juice/allGirlsAreTheSame.mp3)",
        auteur = "Juice Wrld",
        couleurBG = "#e1e1e1", 
        selector = "juice1" 
    },
    {
        nom = "Intro",
        src = "url(../music/Juice/intro.mp3)",
        auteur = "Juice Wrld",
        couleurBG = "#e1e1e1",
        selector = "juice2"  
    },
    {
        nom = "Lean With Me",
        src = "url(../music/Juice/LeanWitMe.mp3)",
        auteur = "Juice Wrld",
        couleurBG = "#e1e1e1",
        selector = "juice3"  
    },
    {
        nom = "Lucid Dreams",
        src = "url(../music/Juice/LucidDreams.mp3)",
        auteur = "Juice Wrld",
        couleurBG = "#e1e1e1",
        selector = "juice4"  
    },
    {
        nom = "Giants",
        src = "url(../music/Juice/Giants.mp3)",
        auteur = "No Copyright Songs",
        couleurBG = "#a1a1a1",
        selector = "ncs1"  
    },
    {
        nom = "Island",
        src = "url(../music/Juice/Island.mp3)",
        auteur = "No Copyright Songs",
        couleurBG = "#a1a1a1",
        selector = "ncs2"  
    },
    {
        nom = "Lune",
        src = "url(../music/Juice/Lune.mp3)",
        auteur = "No Copyright Songs",
        couleurBG = "#a1a1a1",
        selector = "ncs3"  
    },

];

let musicJuiceWrld = [

];



/* pour le changement de la balise title */
let titlePage = document.querySelector("head title");


titlePage.textContent = "Aquafy | Test du script";
/*********************************/

const bouton = document.querySelector(".btn");
const audioElement = document.querySelector("audio");
const visualizer = document.querySelector(".visualizer");

bouton.addEventListener("click", e =>{
    if (ctx == undefined){
        loadVisualizer();
    }
    audioElement.paused ? audioElement.play() : audioElement.pause();
    bouton.classList.toggle("btn-play");
    bouton.classList.toggle("btn-pause");
});
let ctx;

function loadVisualizer(){
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new window.AudioContext();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audioElement);
    source.connect(analyser);
    source.connect(ctx.destination);
    analyser.fftSize = 64;
    const bufferLenght = analyser.frequencyBinCount;
    
    let dataArray = new Uint8Array(bufferLenght);
    let elements=[];
    for(let i=0 ; i< bufferLenght; i++){
        const element = document.createElement('span');
        element.classList.add('element');
        elements.push(element);
        visualizer.appendChild(element);
    }
    
    const clamp = (num, min, max) =>{
        if(num >= max) return max;
        if(num <= min) return min;
        return num;
    }
    
    const update = () =>{
        requestAnimationFrame(update);
        analyser.getByteFrequencyData(dataArray);
        for(let i=0; i< bufferLenght; i++){
            let item = dataArray[i];
            item = item > 150 ? item / 1.5 : item * 1.25;
            elements[i].style.transform = `rotateZ(${i * (360 / bufferLenght)}deg) translate(-50%, ${clamp(item,100, 150)}px)`;
        }
    };
    
    update();
    
}

function playMusic(){
    console.log("allo");
}

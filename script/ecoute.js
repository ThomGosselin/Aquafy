/***************************************************************************************************
Description: Script créant un effet visuel style "visualizer" qui réagie en fonction de la musique qui est en train de jouer
'LAST UPDATE
' DATE       AUTHOR			    MODIFICATION
' ---------- ------------------ ---------------------------------------------------------------------
' 2021-12-17 Thomas Gosselin 	Optimisation générale du code
'***************************************************************************************************/
/**************************************************Declaration des variables***********************************************/
var lastclickBtn = sessionStorage.getItem("musicClick")
    , songName = sessionStorage.getItem("songName");
let ctx
    , titlePage
    , musicInfo;


const bouton = document.querySelector(".btn");
const audioElement = document.querySelector("audio");
audioElement.src = lastclickBtn;
const visualizer = document.querySelector(".visualizer");

bouton.addEventListener("click", e => {
    if (ctx == undefined) {
        loadVisualizer();
    }
    audioElement.paused ? audioElement.play() : audioElement.pause();
    bouton.classList.toggle("btn-play");
    bouton.classList.toggle("btn-pause");
});
/**************************************************Effet visualizer***********************************************/
function loadVisualizer() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    ctx = new window.AudioContext();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audioElement);
    source.connect(analyser);
    source.connect(ctx.destination);
    analyser.fftSize = 64;
    const bufferLenght = analyser.frequencyBinCount;

    let dataArray = new Uint8Array(bufferLenght);
    let elements = [];
    for (let i = 0; i < bufferLenght; i++) {
        const element = document.createElement('span');
        element.classList.add('element');
        elements.push(element);
        visualizer.appendChild(element);
    }

    const clamp = (num, min, max) => {
        if (num >= max) return max;
        if (num <= min) return min;
        return num;
    }

    const update = () => {
        requestAnimationFrame(update);
        analyser.getByteFrequencyData(dataArray);
        for (let i = 0; i < bufferLenght; i++) {
            let item = dataArray[i];
            item = item > 150 ? item / 1.5 : item * 1.25;
            elements[i].style.transform = `rotateZ(${i * (400 / bufferLenght)}deg) translate(-50%, ${clamp(item, 75, 125)}px)`;
        }
    };

    update();

}

/**************************************************Changement du nom de l'onglet en fonction de la musique***********************************************/

titlePage = document.querySelector("head title");


titlePage.textContent = "Aquafy |" + songName;

/**************************************************Changement du nom du texte de bas de page en fonction de la musique***********************************************/
musicInfo = document.querySelector(".musicInfo");
musicInfo.textContent = songName;
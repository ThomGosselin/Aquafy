//Déclarations de variable



/* pour le changement de la balise title */
let titlePage = document.querySelector("head title");

console.log(titlePage);

titlePage.textContent = "Aquafy | Test du script";
/*********************************/


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
            elements[i].style.transform = `rotateZ(${i * (30 / bufferLenght)}deg) translate(-50%, ${clamp(item,100, 150)}px)`;
        }
    };
    
    update();
    
}

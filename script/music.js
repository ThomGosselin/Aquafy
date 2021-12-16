let musicContainer = document.querySelector(".musicContainer");

var lastclickBtn = sessionStorage.getItem("lastclick");
console.log(lastclickBtn);
if (lastclickBtn =="allMusic"){
    loadAllMusic();
}else if (lastclickBtn == "Dylan"){
    loadDylan();
}else if (lastclickBtn == "Juice"){
    loadJuice();
}else if (lastclickBtn == "NCS"){
    loadNCS();
}

function loadAllMusic(){
    let allMusicArray= [
        {
            nom : "Drown",
            src : "url(../music/DylanMathew/D1.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan1"
        },
        {
            nom : "Don't Forget",
            src : "url(../music/DylanMathew/D2.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan2"  
        },
        {
            nom : "The Fall",
            src : "url(../music/DylanMathew/D3.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan3" 
        },
        {
            nom : "Midnight In Tokyo",
            src : "url(../music/DylanMathew/D4.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan4"  
        },
        {
            nom : "Anxiety",
            src : "url(../music/DylanMathew/anxiety.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan5"  
        },
        {
            nom : "Saturday Night",
            src : "url(../music/DylanMathew/SaturdayNight.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan6"  
        },
        {
            nom : "All girls Are the Same",
            src : "url(../music/Juice/allGirlsAreTheSame.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1", 
            selector : "juice1" 
        },
        {
            nom : "Intro",
            src : "url(../music/Juice/intro.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice2"  
        },
        {
            nom : "Lean With Me",
            src : "url(../music/Juice/LeanWitMe.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice3"  
        },
        {
            nom : "Lucid Dreams",
            src : "url(../music/Juice/LucidDreams.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice4"  
        },
        {
            nom : "Giants",
            src : "url(../music/Juice/Giants.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs1"  
        },
        {
            nom : "Island",
            src : "url(../music/Juice/Island.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs2"  
        },
        {
            nom : "Lune",
            src : "url(../music/Juice/Lune.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs3"  
        }
    
    ];

    for(i = 1;i < allMusicArray.length;i++){
        console.log("music"+[i]);
    }
}


function loadDylan(){
    let musicDylan = [
        {
            nom : "Drown",
            src : "url(../music/DylanMathew/D1.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan1"
        },
        {
            nom : "Don't Forget",
            src : "url(../music/DylanMathew/D2.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan2"  
        },
        {
            nom : "The Fall",
            src : "url(../music/DylanMathew/D3.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan3" 
        },
        {
            nom : "Midnight In Tokyo",
            src : "url(../music/DylanMathew/D4.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan4"  
        },
        {
            nom : "Anxiety",
            src : "url(../music/DylanMathew/anxiety.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan5"  
        },
        {
            nom : "Saturday Night",
            src : "url(../music/DylanMathew/SaturdayNight.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan6"  
        }
    ];

    for(i = 1;i < musicDylan.length;i++){
        console.log("music"+[i]);
    }
    
}

function loadJuice(){
    let musicJuiceWrld = [
        {
            nom : "All girls Are the Same",
            src : "url(../music/Juice/allGirlsAreTheSame.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1", 
            selector : "juice1" 
        },
        {
            nom : "Intro",
            src : "url(../music/Juice/intro.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice2"  
        },
        {
            nom : "Lean With Me",
            src : "url(../music/Juice/LeanWitMe.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice3"  
        },
        {
            nom : "Lucid Dreams",
            src : "url(../music/Juice/LucidDreams.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice4"  
        }
    ];
    for(i = 1;i <= musicJuiceWrld.length;i++){
        console.log("music"+[i]);
    }
}

function loadNCS(){
    let musicNCS = [
        {
            nom : "Giants",
            src : "url(../music/Juice/Giants.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs1"  
        },
        {
            nom : "Island",
            src : "url(../music/Juice/Island.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs2"  
        },
        {
            nom : "Lune",
            src : "url(../music/Juice/Lune.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs3"  
        }
    ];
    for(i = 1;i <= musicNCS.length;i++){
        console.log("music"+[i]);
    }
}
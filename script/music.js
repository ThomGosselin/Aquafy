let musicContainer = document.querySelector(".musicContainer");

var lastclickBtn = sessionStorage.getItem("artistClick");
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
            nomForCall:"Drown",
            src : "url(../music/allSongs/Drown.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan1"
        },
        {
            nom : "Don't Forget",
            nomForCall:"DontForget",
            src : "url(../music/allSongs/DontForget.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan2"  
        },
        {
            nom : "The Fall",
            nomForCall:"TheFall",
            src : "url(../music/allSongs/TheFall.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan3" 
        },
        {
            nom : "Midnight In Tokyo",
            nomForCall:"MidnightInTokyo",
            src : "url(../music/allSongs/MidnightInTokyo.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan4"  
        },
        {
            nom : "Anxiety",
            nomForCall:"Anxiety",
            src : "url(../music/allSongs/anxiety.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan5"  
        },
        {
            nom : "Saturday Night",
            nomForCall:"SaturdayNight",
            src : "url(../music/allSongs/SaturdayNight.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan6"  
        },
        {
            nom : "All girls Are the Same",
            nomForCall:"allGirlsAreTheSame",
            src : "url(../music/allSongs/allGirlsAreTheSame.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1", 
            selector : "juice1" 
        },
        {
            nom : "Intro",
            nomForCall:"Intro",
            src : "url(../music/allSongs/intro.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice2"  
        },
        {
            nom : "Lean With Me",
            nomForCall:"LeanWithMe",
            src : "url(../music/allSongs/LeanWitMe.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice3"  
        },
        {
            nom : "Lucid Dreams",
            nomForCall:"LucidDreams",
            src : "url(../music/allSongs/LucidDreams.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice4"  
        },
        {
            nom : "Giants",
            nomForCall:"Giants",
            src : "url(../music/allSongs/Giants.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs1"  
        },
        {
            nom : "Island",
            nomForCall:"Island",
            src : "url(../music/allSongs/Island.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs2"  
        },
        {
            nom : "Lune",
            nomForCall:"Lune",
            src : "url(../music/allSongs/Lune.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs3"  
        }
    
    ];

    for(i = 1;i < allMusicArray.length;i++) {
    let newDivMusic = document.createElement("div");
    let linkToListen = document.createElement("a");
    let nomArtist = document.createElement("h3");
    newDivMusic.classList.add("music");
    linkToListen.href="ecoute.html";
    linkToListen.classList.add(allMusicArray[i].nomForCall);
    linkToListen.textContent = allMusicArray[i].nomForCall;
    nomArtist.textContent = allMusicArray[i].auteur;
    musicContainer.appendChild(newDivMusic);
    newDivMusic.appendChild(linkToListen);
    newDivMusic.appendChild(nomArtist);
    let ClickMusic = document.querySelector(`.${linkToListen.className}`);
    ClickMusic.addEventListener("click",function(){
        let MusicSrc = "../music/allSongs/"+linkToListen.className+".mp3";
        let songTitle = linkToListen.className;
        sessionStorage.setItem("songName", songTitle);
        sessionStorage.setItem("musicClick",MusicSrc);
    });
}
}


function loadDylan(){
    let musicDylan = [
        {
            nom : "Drown",
            nomForCall:"Drown",
            src : "url(../music/DylanMathew/Drown.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan1"
        },
        {
            nom : "Don't Forget",
            nomForCall:"DontForget",
            src : "url(../music/DylanMathew/DontForget.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan2"  
        },
        {
            nom : "The Fall",
            nomForCall:"TheFall",
            src : "url(../music/DylanMathew/TheFall.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan3" 
        },
        {
            nom : "Midnight In Tokyo",
            nomForCall:"MidnightInTokyo",
            src : "url(../music/DylanMathew/MidnightInTokyo.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan4"  
        },
        {
            nom : "Anxiety",
            nomForCall:"Anxiety",
            src : "url(../music/DylanMathew/anxiety.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan5"  
        },
        {
            nom : "Saturday Night",
            nomForCall:"SaturdayNight",
            src : "url(../music/DylanMathew/SaturdayNight.mp3)",
            auteur : "Dylan Matthew",
            couleurBG : "#fff",
            selector : "dylan6"  
        }
    ];

    for(i = 0;i < musicDylan.length;i++){
        let newDivMusic = document.createElement("div");
        let linkToListen = document.createElement("a");
        let nomArtist = document.createElement("h3");
        newDivMusic.classList.add("music");
        linkToListen.href="ecoute.html";
        linkToListen.classList.add(musicDylan[i].nomForCall);
        linkToListen.textContent = musicDylan[i].nomForCall;
        nomArtist.textContent = musicDylan[i].auteur;
        musicContainer.appendChild(newDivMusic);
        newDivMusic.appendChild(linkToListen);
        newDivMusic.appendChild(nomArtist);
        console.log()
        let ClickMusic = document.querySelector(`.${linkToListen.className}`);
        ClickMusic.addEventListener("click",function(){
            let MusicSrc = "../music/DylanMathew/"+linkToListen.className+".mp3";
            let songTitle = linkToListen.className;
        sessionStorage.setItem("songName", songTitle);
            sessionStorage.setItem("musicClick",MusicSrc);
        });
    }
}

function loadJuice(){
    let musicJuiceWrld = [
        {
            nom : "All girls Are the Same",
            nomForCall:"allGirlsAreTheSame",
            src : "url(../music/Juice/allGirlsAreTheSame.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1", 
            selector : "juice1" 
        },
        {
            nom : "Intro",
            nomForCall:"Intro",
            src : "url(../music/Juice/intro.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice2"  
        },
        {
            nom : "Lean With Me",
            nomForCall:"LeanWithMe",
            src : "url(../music/Juice/LeanWitMe.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice3"  
        },
        {
            nom : "Lucid Dreams",
            nomForCall:"LucidDreams",
            src : "url(../music/Juice/LucidDreams.mp3)",
            auteur : "Juice Wrld",
            couleurBG : "#e1e1e1",
            selector : "juice4"  
        }
    ];
    for(i = 0;i <= musicJuiceWrld.length;i++){
        let newDivMusic = document.createElement("div");
        let linkToListen = document.createElement("a");
        let nomArtist = document.createElement("h3");
        newDivMusic.classList.add("music");
        linkToListen.href="ecoute.html";
        linkToListen.classList.add(musicJuiceWrld[i].nomForCall);
        linkToListen.textContent = musicJuiceWrld[i].nomForCall;
        nomArtist.textContent = musicJuiceWrld[i].auteur;
        musicContainer.appendChild(newDivMusic);
        newDivMusic.appendChild(linkToListen);
        newDivMusic.appendChild(nomArtist);
        let ClickMusic = document.querySelector(`.${linkToListen.className}`);
        ClickMusic.addEventListener("click",function(){
            let MusicSrc = "../music/Juice/"+linkToListen.className+".mp3";
            let songTitle = linkToListen.className;
        sessionStorage.setItem("songName", songTitle);
            sessionStorage.setItem("musicClick",MusicSrc);
        });
    }
    }


function loadNCS(){
    let musicNCS = [
        {
            nom : "Giants",
            nomForCall:"Giants",
            src : "url(../music/Juice/Giants.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs1"  
        },
        {
            nom : "Island",
            nomForCall:"Island",
            src : "url(../music/Juice/Island.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs2"  
        },
        {
            nom : "Lune",
            nomForCall:"Lune",
            src : "url(../music/Juice/Lune.mp3)",
            auteur : "No Copyright Songs",
            couleurBG : "#a1a1a1",
            selector : "ncs3"  
        }
    ];
    for(i = 0;i <= musicNCS.length;i++){
        let newDivMusic = document.createElement("div");
        let linkToListen = document.createElement("a");
        let nomArtist = document.createElement("h3");
        newDivMusic.classList.add("music");
        linkToListen.href="ecoute.html";
        linkToListen.classList.add(musicNCS[i].nom);
        linkToListen.textContent = musicNCS[i].nom;
        nomArtist.textContent = musicNCS[i].auteur;
        musicContainer.appendChild(newDivMusic);
        newDivMusic.appendChild(linkToListen);
        newDivMusic.appendChild(nomArtist);
        let ClickMusic = document.querySelector(`.${linkToListen.className}`);
        ClickMusic.addEventListener("click",function(){
            let MusicSrc = "../music/NCS/"+linkToListen.className+".mp3";
            let songTitle = linkToListen.className;
            sessionStorage.setItem("songName", songTitle);
            sessionStorage.setItem("musicClick",MusicSrc);
        });
    }
}
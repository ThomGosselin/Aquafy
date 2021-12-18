/***************************************************************************************************
Description: Script permettant de charger dans la page les différentes musiques en fonction de l'artiste cliquer dans la page precedente
'LAST UPDATE
' DATE       AUTHOR			    MODIFICATION
' ---------- ------------------ ---------------------------------------------------------------------
' 2021-12-17 Thomas Gosselin 	Optimisation générale du code
'***************************************************************************************************/
/**************************************************Déclaration de variables***********************************************/


let musicContainer = document.querySelector(".musicContainer");

var lastclickBtn
    , URLBase;

switch (lastclickBtn = sessionStorage.getItem("artistClick")) {
    case "Dylan":
        URLBase = "../music/DylanMathew/"
        loadDylan();
        break;
    case "Juice":
        URLBase = "../music/Juice/"
        loadJuice();
        break;
    case "NCS":
        URLBase = "../music/ncs/"
        loadNCS();
        break;
    default:
        URLBase = "../music/allSongs/"
        loadAllMusic();
}

function loadAllMusic() {
    let allMusicArray = [
        {
            nom: "Drown",
            nomForCall: "Drown",
            src: "url(../music/allSongs/Drown.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan1"
        },
        {
            nom: "Don't Forget",
            nomForCall: "DontForget",
            src: "url(../music/allSongs/DontForget.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan2"
        },
        {
            nom: "The Fall",
            nomForCall: "TheFall",
            src: "url(../music/allSongs/TheFall.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan3"
        },
        {
            nom: "Midnight In Tokyo",
            nomForCall: "MidnightInTokyo",
            src: "url(../music/allSongs/MidnightInTokyo.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan4"
        },
        {
            nom: "Anxiety",
            nomForCall: "Anxiety",
            src: "url(../music/allSongs/anxiety.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan5"
        },
        {
            nom: "Saturday Night",
            nomForCall: "SaturdayNight",
            src: "url(../music/allSongs/SaturdayNight.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan6"
        },
        {
            nom: "All girls Are the Same",
            nomForCall: "allGirlsAreTheSame",
            src: "url(../music/allSongs/allGirlsAreTheSame.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice1"
        },
        {
            nom: "Intro",
            nomForCall: "Intro",
            src: "url(../music/allSongs/intro.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice2"
        },
        {
            nom: "Lean With Me",
            nomForCall: "LeanWithMe",
            src: "url(../music/allSongs/LeanWitMe.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice3"
        },
        {
            nom: "Lucid Dreams",
            nomForCall: "LucidDreams",
            src: "url(../music/allSongs/LucidDreams.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice4"
        },
        {
            nom: "Giants",
            nomForCall: "Giants",
            src: "url(../music/allSongs/Giants.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs1"
        },
        {
            nom: "Island",
            nomForCall: "Island",
            src: "url(../music/allSongs/Island.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs2"
        },
        {
            nom: "Lune",
            nomForCall: "Lune",
            src: "url(../music/allSongs/Lune.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs3"
        }

    ];
    loadMusic(allMusicArray)

}


function loadDylan() {
    let musicDylan = [
        {
            nom: "Drown",
            nomForCall: "Drown",
            src: "url(../music/DylanMathew/Drown.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan1"
        },
        {
            nom: "Don't Forget",
            nomForCall: "DontForget",
            src: "url(../music/DylanMathew/DontForget.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan2"
        },
        {
            nom: "The Fall",
            nomForCall: "TheFall",
            src: "url(../music/DylanMathew/TheFall.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan3"
        },
        {
            nom: "Midnight In Tokyo",
            nomForCall: "MidnightInTokyo",
            src: "url(../music/DylanMathew/MidnightInTokyo.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan4"
        },
        {
            nom: "Anxiety",
            nomForCall: "Anxiety",
            src: "url(../music/DylanMathew/anxiety.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan5"
        },
        {
            nom: "Saturday Night",
            nomForCall: "SaturdayNight",
            src: "url(../music/DylanMathew/SaturdayNight.mp3)",
            auteur: "Dylan Matthew",
            couleurBG: "#fff",
            selector: "dylan6"
        }
    ];

    loadMusic(musicDylan)
}

function loadJuice() {
    let musicJuiceWrld = [
        {
            nom: "All girls Are the Same",
            nomForCall: "allGirlsAreTheSame",
            src: "url(../music/Juice/allGirlsAreTheSame.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice1"
        },
        {
            nom: "Intro",
            nomForCall: "Intro",
            src: "url(../music/Juice/intro.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice2"
        },
        {
            nom: "Lean With Me",
            nomForCall: "LeanWithMe",
            src: "url(../music/Juice/LeanWitMe.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice3"
        },
        {
            nom: "Lucid Dreams",
            nomForCall: "LucidDreams",
            src: "url(../music/Juice/LucidDreams.mp3)",
            auteur: "Juice Wrld",
            couleurBG: "#e1e1e1",
            selector: "juice4"
        }
    ];

    loadMusic(musicJuiceWrld)
}


function loadNCS() {
    let musicNCS = [
        {
            nom: "Giants",
            nomForCall: "Giants",
            src: "url(../music/Juice/Giants.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs1"
        },
        {
            nom: "Island",
            nomForCall: "Island",
            src: "url(../music/Juice/Island.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs2"
        },
        {
            nom: "Lune",
            nomForCall: "Lune",
            src: "url(../music/Juice/Lune.mp3)",
            auteur: "No Copyright Songs",
            couleurBG: "#a1a1a1",
            selector: "ncs3"
        }
    ];
    loadMusic(musicNCS)
}


function loadMusic(MusicArray) {
    for (i = 0; i < MusicArray.length; i++) {
        let newDivMusic = document.createElement("div");
        let linkToListen = document.createElement("a");
        let nomArtist = document.createElement("h3");
        newDivMusic.classList.add("music");
        linkToListen.href = "ecoute.html";
        linkToListen.classList.add(MusicArray[i].nomForCall);
        linkToListen.textContent = MusicArray[i].nom;
        nomArtist.textContent = MusicArray[i].auteur;
        musicContainer.appendChild(newDivMusic);
        newDivMusic.appendChild(linkToListen);
        newDivMusic.appendChild(nomArtist);
        console.log()
        let ClickMusic = document.querySelector(`.${linkToListen.className}`);
        ClickMusic.addEventListener("click", function () {
            let MusicSrc = URLBase + linkToListen.className + ".mp3";
            let songTitle = linkToListen.className;
            sessionStorage.setItem("songName", songTitle);
            sessionStorage.setItem("musicClick", MusicSrc);
        });
    }
}
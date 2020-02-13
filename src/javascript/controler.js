var musicon=0
function bulge(x){
    x.style.width="19.2vw";
    x.style.height="28.5vw"
    x.style.cursor="pointer";
}
function normalImg(x){
    x.style.width="19vw";
    x.style.height="28.3vw"
}
function hands(x){
    x.style.cursor="pointer";
}
function startstop(x){
    if(musicon==1){
        x.src="../images/icons-nomusic.png";
        document.getElementById("musicplayer").pause();
        musicon=0;
    }else if(musicon==0){
        x.src="../images/icons-music.png";
        document.getElementById("musicplayer").play();
        musicon=1;
    }
    console.log(musicon);
}
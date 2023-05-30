console.log("welcome to spotify")
//initioalization
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');

let songs = [
   {    songName: "salame1 kiss",filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
   {    songName: "salame 2kiss",filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
   {    songName: "salame3 kiss",filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
   {    songName: "salame 4kiss",filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
   {    songName: "salame 5kiss",filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
   {    songName: "salame 6kiss",filePath:"songs/6.mp3", coverPath: "covers/6.jpg"}, 
   {    songName: "salame7 kiss",filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
   {    songName: "salame 8kiss",filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
   {    songName: "salame 9kiss",filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    
]

//audioElement.play();
//haandle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;
})
//progressklistner
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration /100;
})
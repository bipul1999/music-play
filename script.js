const music= document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById('play');
const artist= document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


 let progress =document.getElementById("progress");
const lyrics = [
    {
       name:"music",
       title:"romantic song",   // 00
       artist:"bipul singh",
    },
    {
        name:"hara hara",
        title:"bhakti song",     //01
        artist:"raksha singh",
    },
    {
        name:"dr.ji",
       title:"bekar song",      //02
       artist:"apurva singh",
    },
    {
        name:"saawan",
       title:"bekar song",       //03
       artist:"apurva singh",
    },
    {
        name:"faded",
       title:"tonne",               //04
       artist:"allen walker",
    },
    {
        name:"freinds",               //05
       title:"freindship",
       artist:"marshmellow",
    },
    {
        name:"perfect",               //06
       title:"chil song",
       artist:"ED shirren",
    },
    {
        name:"shape",               //07
       title:"english song",
       artist:"ED sheeran",
    },
    {                           
        name:"on my",            //08
       title:"pubg song",
       artist:"allen bhaiya",
    }
];


  let isPlaying = false;
//   for play function.....
  const playMusic = ()=> {
    isPlaying = true;
    music.play();
   
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause
 const pauseMusic=()=> {
    isPlaying = false;
    music.pause();
   
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click',()=> {
    // isPlaying ? pauseMusic():playMusic();
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});
//   changing the music data:
const loadSong = (lyrics) => { 
    title.textContent = lyrics.title;
    artist.textContent = lyrics.artist;
    music.src = "music/" + lyrics.name + ".mp3";
    img.src = "images/" + lyrics.name + ".jpg";

};
    //  loadSong(lyrics[6]);
    //for next button
    SongIndex = 0;
   const nextSong = ()=>{
    SongIndex = (SongIndex+1) % lyrics.length;
    //SongIndex++;
     loadSong(lyrics[SongIndex]);
     playMusic();

   };
   {
   const prevSong = ()=>{
    SongIndex = (SongIndex-1 + lyrics.length) % lyrics.length;
    //SongIndex++;
     loadSong(lyrics[SongIndex]);
     playMusic();
   }
   //progress line
    music.addEventListener("timeupdate",(event)=>{
        // console.log(event);
         const{currentTime, duration} = event.srcElement;
         console.log(currentTime);
         console.log(duration);
         let progress_time =(currentTime / duration) *100;
         console.log(progress_time);
         progress.style.width = `&{progress_time}%`;
    });
   next.addEventListener('click', nextSong);
   prev.addEventListener('click', prevSong);


   }
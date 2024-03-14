import React, { useState,useRef } from 'react';
import './musicPlayer.css';




function MusicPlayer() {  
    const [isAudioPlaying,setisAudioPlaying]=useState(false);
    const [musicProgress,setMusicProgress]=useState(0);
    const [musicIndex,setmusicIndex]=useState(0);
    const [musicTotalLength,setmusicTotalLenght]=useState("04:00");
    const [musicCurrentTime,setmusicCurrentTime]=useState('00:00');
    const [showPlayList,setShowPlayList]=useState(true);
    const [showCross,setshowCross]=useState(false);
    

    const musicApi=[
        {   id:0,
            songName:'Daylight',
            songSrc:'/assets/songs/1.mp3',
            songCover:'/assets/covers/1.jpg',
            songArtist:'JS_Dj'
        },
        { id:1,
        songName:'Ride it',
        songSrc:'/assets/songs/2.mp3',
        songCover:'/assets/covers/2.jpg',
        songArtist:'Honey B'}
       ,
       { 
        id:2,
        songName:'Sunshine',
       songSrc:'/assets/songs/3.mp3',
       songCover:'/assets/covers/3.jpg',
       songArtist:'K K Raj'}
       ,
       
       {
        id:3, 
        songName:'Blue Moon',
       songSrc:'/assets/songs/4.mp3',
       songCover:'/assets/covers/4.jpg',
       songArtist:'Arijit Singh'
    }
    ,
  { 
        id:4,
        songName:'Blue Moon',
       songSrc:'/assets/songs/5.mp3',
       songCover:'/assets/covers/5.jpg',
       songArtist:'KK Raj'
    }
    ,
    {   id:5,
        songName:'Daylight',
        songSrc:'/assets/songs/1.mp3',
        songCover:'/assets/covers/1.jpg',
        songArtist:'JS_Dj'
    },
    { id:6,
    songName:'Ride it',
    songSrc:'/assets/songs/2.mp3',
    songCover:'/assets/covers/2.jpg',
    songArtist:'Honey B'}
   ,
   { 
    id:7,
    songName:'Sunshine',
   songSrc:'/assets/songs/3.mp3',
   songCover:'/assets/covers/3.jpg',
   songArtist:'K K Raj'}
   ,
   
   {
    id:8, 
    songName:'Blue Moon',
   songSrc:'/assets/songs/4.mp3',
   songCover:'/assets/covers/4.jpg',
   songArtist:'Arijit Singh'
}
,
{ 
    id:9,
    songName:'Blue Moon',
   songSrc:'/assets/songs/5.mp3',
   songCover:'/assets/covers/5.jpg',
   songArtist:'KK Raj'
},
{   id:10,
    songName:'Daylight',
    songSrc:'/assets/songs/1.mp3',
    songCover:'/assets/covers/1.jpg',
    songArtist:'JS_Dj'
},
{ id:11,
songName:'Ride it',
songSrc:'/assets/songs/2.mp3',
songCover:'/assets/covers/2.jpg',
songArtist:'Honey B'}
,
{ 
id:12,
songName:'Sunshine',
songSrc:'/assets/songs/3.mp3',
songCover:'/assets/covers/3.jpg',
songArtist:'K K Raj'}
,

{
id:13, 
songName:'Blue Moon',
songSrc:'/assets/songs/4.mp3',
songCover:'/assets/covers/4.jpg',
songArtist:'Arijit Singh'
}
,
{ 
id:14,
songName:'Blue Moon',
songSrc:'/assets/songs/5.mp3',
songCover:'/assets/covers/5.jpg',
songArtist:'KK Raj'
}
    ]
const [currentSongDet,setCurrentSongDet]=useState({
    songName:'Daylight',
    songSrc:'/assets/songs/1.mp3',
    songCover:'/assets/covers/1.jpg',
    songArtist:'JS_Dj'
})
    const handleMusicBar=(e)=>{
        setMusicProgress(e.target.value);
        currentAudio.current.currentTime=e.target.value * currentAudio.current.duration/100;
    }
    const currentAudio=useRef();
    const handleAudio=()=>{
        if(currentAudio.current.paused){
            currentAudio.current.play();
            setisAudioPlaying(true);
        }else{
            currentAudio.current.pause();
            setisAudioPlaying(false);
        }

    }
    const handleNextSong=()=>{
        if(musicIndex >= musicApi.length-1){
            let setNumber=0;
            setmusicIndex(setNumber);
            updateCurrentSong(setNumber);
        }
        else{
            let setNumber=musicIndex+1;
            setmusicIndex(setNumber);
            updateCurrentSong(setNumber);
        }
    }
    const handlePreviouse=()=>{
        if(musicIndex === 0){
            let setNumber=musicApi.length-1;
            setmusicIndex(setNumber);
            updateCurrentSong(setNumber);
        }
        else{
            let setNumber=musicIndex-1;
            setmusicIndex(setNumber);
            updateCurrentSong(setNumber);
        }
    }

    const updateCurrentSong=(songNumber)=>{
        let songObject=musicApi[songNumber];
        currentAudio.current.src=songObject.songSrc;
        currentAudio.current.play();

         setCurrentSongDet({
            songName:songObject.songName,
            songSrc:songObject.songSrc,
            songCover:songObject.songCover,
            songArtist:songObject.songArtist
    })
      setisAudioPlaying(true);
    }
    const handleAudioUpdate=()=>{
        //set Music duration   
           let min=Math.floor(currentAudio.current.duration/60);
           let sec=Math.floor(currentAudio.current.duration%60);
           let musicLength=`${min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec}`;
           setmusicTotalLenght(musicLength);
           //set music current time
           let currentMin=Math.floor(currentAudio.current.currentTime/60);
           let currentSec=Math.floor(currentAudio.current.currentTime%60);
           let currentMusicLength=`${currentMin < 10 ? `0${currentMin}`: currentMin}:${currentSec < 10 ? `0${currentSec}`: currentSec}`;
           setmusicCurrentTime(currentMusicLength);
         const progress=parseInt((currentAudio.current.currentTime/currentAudio.current.duration)*100);
    setMusicProgress(isNaN(progress)?0:progress);
        }
        //Handle Cross Icon
const handleCross=()=>{
           setShowPlayList(false);
        }
        //handleSongCard
        const handleSongCard=(index)=>{
            updateCurrentSong(index);   
        }
        
  return (

<>  
 <h1 className='title'>Musically</h1>
<div className="layOut">
        <div className="hamMenu wrapper" style={{display:showPlayList?'flex':'none'}}>
        <div className="sideBar">
        <i className="fa-regular fa-circle-xmark crossIcon" onClick={handleCross}></i>
        {musicApi.map((musiCard,index)=>(
             <div className="sideCard" onClick={()=>handleSongCard(index)} key={musiCard.id}> <div className="cardImg"><img src={musiCard.songCover} alt="" /><audio src={musiCard.songSrc}></audio></div>
             <div className="songArtist"><span >{musiCard.songName}</span><span className='artistSpan'>{musiCard.songArtist}</span></div></div>     
            ))}
        </div>
        </div>
        <div className="container">
            
            <audio src='/assets/songs/1.mp3'  ref={currentAudio} onTimeUpdate={handleAudioUpdate}></audio>
            <div className="imgFrame"><img src={currentSongDet.songCover}  id='songCover' alt="loading..." /></div>
            <span className="songName">{currentSongDet.songName}</span>
            <span className="songName">{currentSongDet.songArtist}</span>
            <div className="musicTime">
              <p className='timeSpan'>{musicCurrentTime}</p>
            <input type="range" name="player" value={musicProgress} onChange={handleMusicBar} id="player" />
              <p className='timeSpan'>{musicTotalLength}</p>
            </div>
            <div className="icons">
            <i className="fa-solid fa-list playList" onClick={()=>{setShowPlayList(!showPlayList)}}></i>
            <i className="fa-solid fa-angle-left" onClick={handlePreviouse}></i>
            <i className={`fa-solid ${isAudioPlaying?'fa-pause':'fa-play'} `}onClick={handleAudio}></i>
            <i className="fa-solid fa-angle-right" onClick={handleNextSong}></i>
            
            </div>
        </div> 
       
        </div>

</>
  )
}

export default MusicPlayer

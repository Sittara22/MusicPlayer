import React from 'react'
import './musicPlayer.css'

function SongList({updateCurrentSong,showPlayList,setShowPlayList,musicApi}) {
    //Handle Cross Icon
    const handleCross=()=>{
        setShowPlayList(!showPlayList);
     }
     //handleSongCard
     const handleSongCard=(index)=>{
         updateCurrentSong(index);   
     }

  return (
    <div className="hamMenu wrapper" style={{display:showPlayList?'flex':'none'}}>
    <div className="sideBar">
    <i className="fa-regular fa-circle-xmark crossIcon" onClick={handleCross}></i>
    {musicApi.map((musiCard,index)=>(
         <div className="sideCard" onClick={()=>handleSongCard(index)} key={musiCard.id}> <div className="cardImg"><img src={musiCard.songCover} alt="" /><audio src={musiCard.songSrc}></audio></div>
         <div className="songArtist"><span >{musiCard.songName}</span><span className='artistSpan'>{musiCard.songArtist}</span></div></div>     
        ))}
    </div>
    </div>
  )
}

export default SongList

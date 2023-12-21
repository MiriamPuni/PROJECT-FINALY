import React from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import Buttons from './Buttons'
export default function Song({shir, name}) {
    const[ch, setCh] = useState(true)
    const[volume, setVolume] = useState(0.5)
    const[muted, setMuted] = useState(false)
    return <div className='nagan'>
    <ReactPlayer  
    url={shir}  
    width={'790px'} 
    height={'430px'} 
    // style={'box-shadow: 0px 0px 45px 14px rgba(0,0,0,0.1)'}
    muted = {muted} 
    playing = {ch} 
    volume={volume} 
    onReady={()=>ch == false? setCh(true): null}/>
    <Buttons name = {name} ch={ch} setCh={setCh} volume = {volume} setVolume = {setVolume} muted = {muted} setMuted = {setMuted}/>
    </div>
}
import React from 'react'
import Song from './Song'
import data from'./data.json'
import Menu from './Menu'
import { useState } from 'react'
import Dark from './Dark'
export default function ListSong() {
    const [shir, setShir] = useState('')
    const [name, setName] = useState('not sing')
    const [back, setBack] = useState('#fbfbfb')
    const [text, setText] = useState('#000000')
    const [shado, setShado] = useState('#0000001a')
  return <div className='container' style={{backgroundColor: back, color: text, '--shado': shado}}>
    <div className='listSong'>
        {Object.keys(data).map(e => <Menu key={e} song = {data[e]} setShir = {setShir} setName = {setName}/>)}
        </div>
    <Song shir = {shir} name = {name}/>
    <Dark setBack = {setBack} setText = {setText} setShado = {setShado} />
    </div>
}

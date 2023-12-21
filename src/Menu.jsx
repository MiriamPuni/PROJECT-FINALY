import React from 'react'

export default function Menu({song, setShir, setName}) {
    const { name, img, kishur } = song
    return <div className='song'>
        <img onClick={()=>{setShir(kishur); setName(name)}} src={img} alt="" />
    </div>
}

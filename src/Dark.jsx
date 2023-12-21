import React from 'react'
import { useState } from 'react'
localStorage.setItem('status', 'light')
export default function Dark({setBack,setText,setShado }) {
    const[dark, setDark] = useState('light')
    const clickDark = () => {
        if (localStorage.getItem('status') == 'light') {
            localStorage.setItem('status', 'dark')
            setDark('dark')
            setBack(' #1b1b1b')
            setText('#fbfbfb')
            setShado('#fff1a')
        }
        else {
            localStorage.setItem('status', 'light')
            setDark('light')
            setBack('#fbfbfb')
            setText('#000000')
            setShado('#0000001a;')
        }
    }
    return <div>
        <button onClick={clickDark}>
            {
                (dark == 'light')
                    ?
                    <i className="fa-solid fa-moon dark"></i>
                    :
                    <i className="fa-solid fa-sun dark"></i>
            }
        </button>
    </div>

}


export default function Buttons({ setCh, ch , volume, setVolume, setMuted,muted, name}) {

    const luli = (v, setV) => (v == false) ? setV(true) : setV(false)
    const plusVolume = () =>{if(volume < 1) setVolume(prev =>prev + 0.1)}
    const minusVolume = () => {if(volume > 0) setVolume(prev => prev - 0.1)}
    return <div className='buttons'>
        <div className='name'>{name}</div>
        <button onClick={()=>luli(ch, setCh)} className='play'>
            {(ch == true)
                ?
                <i className="fa-solid fa-circle-pause"></i>
                :
                <i className="fa-solid fa-circle-play"></i>
            }
        </button>
        <button onClick={plusVolume}><i className="fa-solid fa-volume-high"></i></button>
        <button onClick={minusVolume}><i className="fa-solid fa-volume-low"></i></button>
        <button onClick={()=>luli(muted, setMuted)}><i className="fa-solid fa-volume-xmark"></i></button>
    </div>
}

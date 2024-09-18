import React from 'react'
import './cardAdd.scss'
import { useNavigate } from 'react-router-dom';

const CardAdd = ({txt, event1, event2}) => {
  return (
    <div className='cardAddWrapper'>
        <p>Desea agregar {txt === 'servicio' ? 'otro' : 'otra' } {txt}?</p>
        <div className='addBtnContainer'>
            <button className='addBtn' onClick={event1}>Si</button>
            <button className='addBtn' onClick={event2} >No</button>
        </div>
    </div>
  )
}

export default CardAdd
import React from 'react'
import './formButton.scss'

const FormButton = ({txt, action}) => {
  return (
    <button type='submit' className='formButton' onClick={action}>{txt}</button>
  )
}

export default FormButton
import React from 'react'
import './formButton.scss'

const FormButton = ({txt}) => {
  return (
    <button type='submit' className='formButton'>{txt}</button>
  )
}

export default FormButton
import React from 'react'
import './profileLine.scss'

const ProfileLine = ({txt1, txt2}) => {
  return (
    <div className='profileLineWrapper'>
        <p>{txt1}</p>
        <p>{txt2}</p>
    </div>
  )
}

export default ProfileLine
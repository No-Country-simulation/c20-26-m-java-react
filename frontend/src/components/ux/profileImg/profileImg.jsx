import React from 'react'
import './profileImg.scss'
const ProfileImg = ({imgProfile, titleProfile}) => {
  return (
    <div className='ProfileImgWrapper'>
        <div className='profileImg'>
            <img src={imgProfile} alt='profile' />
        </div>
        <h4>{titleProfile}</h4>
    </div>
  )
}

export default ProfileImg
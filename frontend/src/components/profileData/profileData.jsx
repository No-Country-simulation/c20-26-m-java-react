import React from 'react'
import './profileData.scss'
const ProfileData = ({children}) => {
  return (
    <div className='profileDataWrapper'>
        {children}
    </div>
  )
}

export default ProfileData
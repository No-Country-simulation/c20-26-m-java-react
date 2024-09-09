import React, { useState } from 'react'
import './header.scss'
import HEADERLOGO from "../../assets/images/Logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [menuUser, setMenuUser] = useState(false)
    const navigate = useNavigate()
    

    const handleClickUser = () => {
        setMenuUser(!menuUser)
    }

    const closeSession = () => {
        setIsLogin(false)
        navigate('/')
        

    }

    return (
    <div className='headerWrapper'>
        <div className='logoContainer'>
            <img src={HEADERLOGO} alt='Logo' />
        </div>
        {
            isLogin && (
                <div className='loginContainer' onClick={handleClickUser}>
                    <img src='https://via.placeholder.com/150' alt='userPhoto' />
                    {
                        menuUser && (
                            <div className='menuUser'>
                                <p onClick={()=>navigate('/user')}>Perfil</p>
                                <p onClick={closeSession}>Cerrar Sesión</p>
                            </div>
                        )
                    }    
                </div>
        )
        }
    </div>
  )
}

export default Header
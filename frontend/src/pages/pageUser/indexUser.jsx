import Card from "../../components/ux/card/card"
import CardProfile from "../../components/ux/cardProfile/cardProfile"
import Calendar from "../../components/ux/calendar/calendar"
import PropTypes from 'prop-types';
import { useState } from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom'

export default function User({ filter, handleFilter }) {

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
    
    User.propTypes = {
        filter: PropTypes.string,
        handleFilter: PropTypes.func 
    };

    return (
        <div>
            <nav>
                <div>
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2 border-radius custom-input" 
                            type="search" 
                            value={filter} 
                            onChange={handleFilter} 
                            placeholder="Busca tu servicio favorito" 
                            aria-label="Search"
                        />
                        <div className="d-flex" style={{ alignItems: 'center' }}>
                            <button className="btn border-radius bi bi-search-heart" style={{ fontSize: '1rem' }} type="submit"></button>
                        </div>
                        {
                            isLogin && (
                                <>
                                    {/* Ícono de perfil con onClick */}
                                    <i 
                                        className="bi bi-person-circle m-2 headerWrapper" 
                                        style={{ fontSize: '2rem', cursor: 'pointer' }}
                                        onClick={handleClickUser}
                                    ></i>
                                    {
                                        menuUser && (
                                            <div className="menuUser">
                                                <p onClick={() => navigate('/user')}>Perfil</p>
                                                <p onClick={closeSession}>Cerrar Sesión</p>
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                    </form>
                </div>
                <nav className="navbar">
                    <h2 className="navbar mt-2 m-1">Bienvenida, Julieta!</h2>
                </nav>
            </nav>
            <div className="container mt-2">
                <div className="row">
                    <h4 className="">Tus clientes</h4>
                    <div className="col-8">
                        <div>
                            <CardProfile />
                            <Card />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row-2">
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

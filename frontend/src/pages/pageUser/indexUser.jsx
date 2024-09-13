import Card from "../../components/ux/card/card";
import CardProfile from "../../components/ux/cardProfile/cardProfile";
import Calendar from "../../components/ux/calendar/calendar";
import PropTypes from 'prop-types';
import './header.scss';
import {  NavLink} from 'react-router-dom';

export default function User({ filter, handleFilter }) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <nav>
                <div>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input 
                            className="form-control me-2 border-radius custom-input" 
                            type="search" 
                            value={filter} 
                            onChange={handleFilter} 
                            placeholder="Busca tu servicio favorito" 
                            aria-label="Search"
                        />
                        <div className="d-flex" style={{ alignItems: 'center' }}>
                            <button 
                                className="btn border-radius bi bi-search-heart" 
                                style={{ fontSize: '1rem' }} 
                                type="submit">
                            </button>
                        </div>
                        <span className="navbar-text order-lg-2 order-0">
                            <NavLink to={'/search'}>
                                <i className="bi bi-person"></i>
                            </NavLink>
                        </span>

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

// Definición de PropTypes fuera del componente
User.propTypes = {
    filter: PropTypes.string,
    handleFilter: PropTypes.func 
};

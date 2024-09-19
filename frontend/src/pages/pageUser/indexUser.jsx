import Card from "../../components/ux/card/card";
import Calendar from "../../components/ux/calendar/calendar";
import CardPet from "../../components/ux/card/cardPet";
import PropTypes from 'prop-types';
import {  NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchData } from "../../constants/serchData";

export default function User({ filter, handleFilter }) {

    const dataLog = useSelector((state) => state.indexR);
    const dataObj = searchData(dataLog.index);

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
                                className="btn border-radius bi bi-search-heart mt-1 mb-4" 
                                style={{ fontSize: '1rem' }} 
                                type="submit">
                            </button>
                        </div>
                        <span className="navbar-text order-lg-2 order-0">
                            <NavLink to={'/profile'}>
                                <i className="bi bi-person" style={{fontSize: '30px'}}></i>
                            </NavLink>
                        </span>
                    </form>
                </div>
                <nav className="navbar">
                    <h2 className="navbar mt-2 m-1">Hola {dataObj.name.substring(0, dataObj.name.indexOf(' '))}</h2>
                </nav>
            </nav>
            <div className="container mt-2">
                <div className="row">
                    <h4 className="">Tus Mascotas</h4>
                    <div className="col-8">
                        <div>
                            {
                                dataObj.pets.map((pet) => (
                                    <CardPet objPet={pet} key={pet.id}/>
                                ))
                            }
                            <Card/>
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

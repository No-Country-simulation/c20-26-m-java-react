import Card from "../../components/ux/card/card"
import Calendar from "../../components/ux/calendar/calendar"
import PropTypes from 'prop-types';
import CardPet from "../../components/ux/card/cardPet";

export default function User({ filter, handleFilter }) {

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
                            value={filter} // Cambiado de checked a value
                            onChange={handleFilter} 
                            placeholder="Busca tu servicio favorito" 
                            aria-label="Search"
                        />
                        <div className="d-flex" style={{ alignItems: 'center' }}>
                            <button className="btn border-radius bi bi-search-heart" style={{ fontSize: '1rem' }} type="submit"></button>
                        </div>
                        <i className="bi bi-person-circle m-2" style={{ fontSize: '2rem' }}></i>
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
                            <CardPet/>
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

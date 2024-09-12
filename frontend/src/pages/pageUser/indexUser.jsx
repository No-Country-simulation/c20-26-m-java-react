import Card from "../../components/ux/card/card"
import CardEvent from "../../components/ux/cardEvent/cardEvent"
import CardProfile from "../../components/ux/cardProfile/cardProfile"
import Calendar from "../../components/ux/calendar/calendar"

export default function User() {
    return(
        <div>
           <nav>
                <div>
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2 border-radius custom-input" 
                            type="search" 
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
                    <h2 className="navbar mt-2 m-1" href="#">Bienvenida, Julieta!</h2>
                </nav>
            </nav>
            <div className="mt-3">
                <div className="row">
                    <h4 className="">Tus clientes</h4>
                    <div className="col-8 mt-3">
                        <div>
                            <CardProfile/>
                            <Card/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row-2">
                            <Calendar/>
                            <CardEvent/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
// import Card from "../../components/ux/card/card"
// import CardEvent from "../../components/ux/cardEvent/cardEvent"
import CardProfile from "../../components/ux/cardProfile/cardProfile"
import Calendar from "../../components/ux/calendar/calendar"

export default function User() {
    return(
        <div>
           <nav>
                <div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 border-radius" type="search" placeholder="Busca tu servicio favorito" aria-label="Search"/>
                        <button className="btn bg-c1 border-radius" type="submit">Search</button>
                    </form>
                </div>
                <nav className="navbar">
                    <h2 className="navbar mt-2 m-1" href="#">Bienvenida, Julieta!</h2>
                </nav>
            </nav>
            <div className="mt-5">
                
                <div className="row">
                    <h4 className="">Tus clientes</h4>
                    <div className="col-8 mt-3">
                        <CardProfile/>
                    </div>
                    <div className="col-4">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
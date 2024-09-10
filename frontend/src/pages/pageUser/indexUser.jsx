// import Card from "../../components/ux/card/card"
// import CardEvent from "../../components/ux/cardEvent/cardEvent"
import CardProfile from "../../components/ux/cardProfile/cardProfile"
import Calendar from "../../components/ux/calendar/calendar"

export default function User() {
    return(
        <div>
           <nav className="">
                <div className="">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2 border-radius" type="search" placeholder="Busca tu servicio favorito" aria-label="Search"/>
                    <button className="btn bg-c1 border-radius" type="submit">Search</button>
                    </form>
                </div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <h2 className="navbar mt-2" href="#">Bienvenida, Julieta!</h2>
                    </div>
                </nav>
            </nav>
            <div className="mt-5 text-center">
                <div className="row">
                    <div className="col">
                        <CardProfile/>
                    </div>
                    <div className="col">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>    
    )
}
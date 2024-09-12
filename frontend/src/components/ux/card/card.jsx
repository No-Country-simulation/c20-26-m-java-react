export default function Card() {
    return (
        <div>
            <h4>Tus servicios</h4>
            <div className="container text-center row">
                <div className="col mt-2">
                    <div className="card p-1 border-radius target" style={{ maxWidth: "14rem" }}>
                        <i className="bi bi-person-walking mt-3 bg-c1"></i>
                        <h5 className="card-title p-3 bg-c1">Paseo</h5>
                    </div>
                </div>
                <div className="col mt-2">
                    <div className="card p-1 border-radius target" style={{ maxWidth: "14rem"}}>
                        <i className="bi bi-heart-fill mt-3 bg-c1"></i>
                        <h5 className="card-title p-3 bg-c1">Cuidado</h5>
                    </div>
                </div>
                <div className="col mt-2">
                    <div className="card p-1 border-radius target" style={{ maxWidth: "14rem"}}>
                        <i className="bi bi-clipboard-check-fill  mt-3 bg-c1"></i>
                        <h5 className="card-title p-3 bg-c1">Cuidado</h5>
                    </div>
                </div>
            </div>
        </div>    
    );
}

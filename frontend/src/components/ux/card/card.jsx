export default function Card() {
    return (
        <div className="container">
            <div className="container text-center row">
                <div className="col-3 mt-5 ">
                <div className="card p-1 border-radius target" style={{ maxWidth: "14rem" }}>
                    <i className="bi bi-person-walking mt-3 text-white"></i>
                    <h5 className="card-title p-3 text-white">Paseo</h5>
                </div>
                </div>
                <div className="col-3 mt-5">
                    <div className="card p-1 border-radius target" style={{ maxWidth: "14rem"}}>
                        <i className="bi bi-heart-fill mt-3 text-white"></i>
                        <h5 className="card-title p-3 text-white">Cuidado</h5>
                    </div>
                </div>
                <div className="col-3 mt-5">
                    <div className="card p-1 border-radius target" style={{ maxWidth: "14rem"}}>
                        <i className="bi bi-clipboard-check-fill  mt-3 text-white"></i>
                        <h5 className="card-title p-3 text-white">Cuidado</h5>
                    </div>
                </div>
            </div>
        </div>    
    );
}

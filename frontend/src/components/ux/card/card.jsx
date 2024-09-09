export default function Card() {
    return (
        <div className="container text-center row">
            <div className="col-3 mt-5">
                <div className="card p-1 border-radius" style={{ maxWidth: "14rem", background: "#E3E458", border: "#E3E458", width: "16rem"}}>
                    <i className="bi bi-person-walking mt-3"></i>
                    <h5 className="card-title p-3">Paseo</h5>
                </div>
            </div>
            <div className="col-3 mt-5">
                <div className="card p-1 border-radius" style={{ maxWidth: "14rem", background: "#E3E458", border: "#E3E458", width: "16rem" }}>
                    <i className="bi bi-heart-fill mt-3"></i>
                    <h5 className="card-title p-3">Cuidado</h5>
                </div>
            </div>
            <div className="col-3 mt-5">
                <div className="card p-1 border-radius" style={{ maxWidth: "14rem", background: "#E3E458", border: "#E3E458", width: "16rem" }}>
                    <i className="bi bi-clipboard-check-fill  mt-3"></i>
                    <h5 className="card-title p-3">Cuidado</h5>
                </div>
            </div>
        </div>
    );
}

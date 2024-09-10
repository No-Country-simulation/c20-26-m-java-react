

export default function CardEvent() {
    return(
        <div className="container">
            <div className="card bg-c2 border-radius mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header text-center">Agosto 15</div>
                <div className="card-body">
                    {/* Primera tarjeta */}
                    <div className="card mb-3 border-radius">
                        <div className="container d-flex flex-row align-items-center">
                            <div className="me-3">
                                <i className="bi bi-person-walking fs-3"></i>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Maylo</span>
                                <span>Pastor Aleman</span>
                                <span className="text-muted">09:00 pm</span>
                            </div>
                        </div>
                    </div>
                    {/* Segunda tarjeta */}
                    <div className="card mb-3 border-radius">
                        <div className="container d-flex flex-row align-items-center">
                            <div className="me-3">
                                <i className="bi bi-heart-fill fs-3"></i>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Maylo</span>
                                <span>Pastor Aleman</span>
                                <span className="text-muted">09:00 pm</span>
                            </div>
                        </div>
                    </div>
                    {/* Tercera tarjeta */}
                    <div className="card mb-3 border-radius">
                        <div className="container d-flex flex-row align-items-center">
                            <div className="me-3">
                                <i className="bi bi-clipboard-check-fill fs-3 "></i>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">Maylo</span>
                                <span>Pastor Aleman</span>
                                <span className="text-muted">09:00 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
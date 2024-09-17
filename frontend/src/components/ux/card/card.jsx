import { useNavigate } from 'react-router-dom';

export default function Card() {
  const navigate = useNavigate();

  const handleNavigate = (filter) => {
    navigate(`/search`, { state: { filter } }); // Pasamos el filtro en el estado
  };

  return (
    <div className="container">
      <h4>Tus servicios</h4>
      <div className="text-center row ">
        <div className="col mt-2">
          <div
            onClick={() => handleNavigate('Paseador')}
            className="card p-1 border-radius target"
            style={{ maxWidth: "14rem" }}
          >
            <i className="bi bi-person-walking mt-3 bg-c1"></i>
            <h5 className="card-title p-3 bg-c1">Paseador</h5>
          </div>
        </div>
        <div className="col mt-2">
          <div
            onClick={() => handleNavigate('Guarderia')}
            className="card p-1 border-radius target"
            style={{ maxWidth: "14rem" }}
          >
            <i className="bi bi-heart-fill mt-3 bg-c1"></i>
            <h5 className="card-title p-3 bg-c1">Guarderia</h5>
          </div>
        </div>
        <div className="col mt-2">
          <div
            onClick={() => handleNavigate('Veterinaria')}
            className="card p-1 border-radius target"
            style={{ maxWidth: "14rem" }}
          >
            <i className="bi bi-clipboard-check-fill mt-3 bg-c1"></i>
            <h5 className="card-title p-3 bg-c1">Veterinaria</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

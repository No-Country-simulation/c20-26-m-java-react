import { useNavigate } from 'react-router-dom'

export default function CardPet() {

  const navigate = useNavigate()

  return (
    <div className="card-pet-container">
      <div className="card custom-card">
        <img
          src="../../src/assets/images/banner.jpg"
          className="card-image"
          alt="Pet"
        />
        <div className="card-content">
          <div className="card-header">
            <span className="pet-name">Tobi</span>
            <span className="pet-age">2 año</span>
          </div>
          <div className="pet-details">
            <span>Color <br /> Blanco</span>
            <span>Altura <br /> 35cm</span>
            <span>Peso <br /> 6kg</span>
          </div>
        </div>
        <div className="card-icon">
            <i className="bi bi-box-arrow-up-right textDecoration text-black" onClick={()=>navigate('/profile')}></i>
        </div>
      </div>
    </div>
  );
}

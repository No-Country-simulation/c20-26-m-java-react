import { useNavigate } from 'react-router-dom'

export default function CardPet({objPet}) {
  const dataPet = objPet;
  const navigate = useNavigate()

  return (
    <div className="card-pet-container">
      <div className="card custom-card">
        <img
          src={dataPet.imgPet}
          className="card-image"
          alt="Pet"
        />
        <div className="card-content">
          <div className="card-header">
            <span className="pet-name">{dataPet.name}</span>
            <span className="pet-age">{dataPet.age} años</span>
          </div>
          <div className="pet-details">
            <span>Especie <br /> {dataPet.species}</span>
            <span>Vacunas <br /> {dataPet.vacs}</span>
            <span>Comportamiento <br /> {dataPet.behavior}</span>
          </div>
        </div>
        <div className="card-icon">
            <i className="bi bi-box-arrow-up-right textDecoration text-black" onClick={()=>navigate('/profile')}></i>
        </div>
      </div>
    </div>
  );
}

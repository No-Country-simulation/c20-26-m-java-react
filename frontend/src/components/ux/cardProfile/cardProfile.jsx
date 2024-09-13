import { useState } from "react";

export default function CardProfile() {
    const [cardProfiles, setCardProfiles] = useState([
        { name: 'Mika', owner: 'Laura Rodriguez', imageSrc: '../src/assets/images/pet1.jpg' },
        { name: 'Tomi', owner: 'Laura Rodriguez', imageSrc: '../src/assets/images/pet2.jpg' },
        { name: 'Duque', owner: 'Laura Rodriguez', imageSrc: '../src/assets/images/pet3.jpg' },
        { name: 'Kiara', owner: 'Laura Rodriguez', imageSrc: '../src/assets/images/pet4.jpg' },
        { name: 'Morfi', owner: 'Laura Rodriguez', imageSrc: '../src/assets/images/pet5.jpg' }
    ]);

    /*
    const [newProfile, setNewProfile] = useState({
        name: '',
        owner: '',
        imageSrc: ''
    });*/

    //const [showForm, setShowForm] = useState(false); 

    /*
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };*/
    /*
    const handleAddProfile = () => {
        setCardProfiles([...cardProfiles, newProfile]);
        setNewProfile({ name: '', owner: '', imageSrc: '' }); 
        setShowForm(false); 
    };*/

    return (
        <div>
            <div className="text-center scroll">
                <div className="d-flex space-between">
                    {cardProfiles.map((profile, index) => (
                        <div className="row m-2" key={index}>
                            <div className="mx-1 px-1 mb-2 custom-margin">
                                <div className="text-center">
                                    <div className="card-body bg-c1 border-radius">
                                        <div className="circle-image">
                                            <img src={profile.imageSrc} alt="Mascota" />
                                        </div>
                                        <h5 className="card-title">{profile.name}</h5>
                                        <p className="p6 p-2">{profile.owner}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/*
                    <div className="mx-1 px-1 mb-2 custom-margin row mt-2">
                        <div className="text-center">
                            <div className="card-body bg-c4 border-radius d-flex justify-content-center align-items-center" style={{ width: '90px', height: '140px' }} onClick={() => setShowForm(true)}>
                                <div>
                                    <i className="bi bi-plus" style={{ fontSize: '50px' }}></i>
                                    <p className="p-1">Agregar otro cliente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}
                </div>
            </div>
            {/*
            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button type="button" className="btn-close" onClick={() => setShowForm(false)}>X</button>
                        <h5 className="modal-title">Agregar Nuevo Perfil</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={newProfile.name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="owner" className="form-label">Propietario</label>
                                <input type="text" className="form-control" id="owner" name="owner" value={newProfile.owner} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imageSrc" className="form-label">URL de Imagen</label>
                                <input type="text" className="form-control" id="imageSrc" name="imageSrc" value={newProfile.imageSrc} onChange={handleInputChange} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleAddProfile}>Agregar Perfil</button>
                        </form>
                    </div>
                </div>
            )}
            */}
        </div>
    );
}

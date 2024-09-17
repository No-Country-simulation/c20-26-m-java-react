import { useState } from "react";

export default function CardProfileService() {

    const [cardProfiles, setCardProfiles] = useState([
        { owner: 'Maria Metral', pet: 'Mika', imageSrc: '../src/assets/images/mujer1.jpg' },
        { owner: 'Ignacio Torrez', pet: 'Tomi', imageSrc: '../src/assets/images/hombre1.jpg' },
        { owner: 'Juan Lopez', pet: 'Duque', imageSrc: '../src/assets/images/hombre2.jpg' },
        { owner: 'Marta Puente', pet: 'Kiara ', imageSrc: '../src/assets/images/mujer2.jpg' },
        { owner: 'Pedro Murie', pet: 'Morfi ', imageSrc: '../src/assets/images/hombre3.jpg' }
    ]);

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
                                        <h5 className="card-title">{profile.owner}</h5>
                                        <p className="p6 p-2">{profile.pet}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
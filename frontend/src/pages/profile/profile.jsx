import React from "react";
import "./profile.scss";
import { USER } from "../../constants/user";
import { DATASERVICES } from "../../constants/services";
import ProfileData from "../../components/profileData/profileData";
import ProfileLine from "../../components/ux/profileLine/profileLine";
import ProfileImg from "../../components/ux/profileImg/profileImg";
const Profile = () => {
    const userProfile = USER[0];
    /* const userProfile = DATASERVICES[0] */
    return (
        <div className="profileWrapper">
            <ProfileData>
                <ProfileImg imgProfile={userProfile.photo} titleProfile={'Informacion Personal'} />
                <ProfileLine txt1="Nombre" txt2={userProfile.name} />
                <ProfileLine txt1="DNI" txt2={userProfile.dni} />
                {userProfile.typeService != "Usuario" ? (
                    <ProfileLine
                        txt1="Tipo de Usuario"
                        txt2={userProfile.typeService}
                    />
                ) : (
                    ""
                )}
                <ProfileLine txt1="Ciudad" txt2={userProfile.city} />
                <ProfileLine txt1="Mail" txt2={userProfile.mail} />
                <ProfileLine txt1="Telefono" txt2={userProfile.phone} />
            </ProfileData>
            {userProfile.pets &&
                userProfile.pets.map((pet, index) => (
                    <ProfileData key={index}>
                        <ProfileImg imgProfile={userProfile.photo} titleProfile={'Informacion de Mascota'} />
                        <ProfileLine txt1="Nombre" txt2={pet.name} />
                        <ProfileLine txt1="Especie" txt2={pet.species} />
                        <ProfileLine txt1="Raza" txt2={pet.breed} />
                        <ProfileLine txt1="Edad" txt2={pet.age} />
                        <ProfileLine txt1="Genero" txt2={pet.gender} />
                        <ProfileLine txt1="Vacunas" txt2={pet.vacs} />
                        <ProfileLine
                            txt1="Comportamiento"
                            txt2={pet.behavior}
                        />
                        {
                            pet.details && (
                                <ProfileLine txt1="Detalles" txt2={pet.details} />
                            ) 
                        }
                    </ProfileData>
                ))}
        </div>
    );
};

export default Profile;

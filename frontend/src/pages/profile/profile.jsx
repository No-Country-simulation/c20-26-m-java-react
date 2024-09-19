import "./profile.scss";
import { USER } from "../../constants/user";
import { DATASERVICES } from "../../constants/services";
import ProfileData from "../../components/profileData/profileData";
import ProfileLine from "../../components/ux/profileLine/profileLine";
import ProfileImg from "../../components/ux/profileImg/profileImg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchData } from "../../constants/serchData";

const Profile = () => {
    const dataLog = useSelector((state) => state.indexR);
    const userProfile = searchData(dataLog.index);

    const navigate = useNavigate();

    return (
        <div className="profileWrapper">
            <ProfileData>
                <div className="row">
                    <div
                        className="col-auto"
                        style={{
                            position: "absolute",
                            top: "3rem",
                            left: "40px",
                        }}
                    >
                        <i
                            className="bi bi-chevron-left"
                            onClick={() => navigate("/user")}
                            style={{ fontSize: "35px" }}
                        ></i>
                    </div>
                    <div
                        className="col text-center"
                        style={{ marginLeft: "50px" }}
                    >
                        <h2 className="mb-5">Información personal</h2>
                    </div>
                </div>

                <ProfileLine txt1="Nombre" txt2={userProfile.name} />
                <ProfileLine txt1="DNI" txt2={userProfile.dni} />
                {userProfile.typeUser !== "normal" ? (
                    <ProfileLine
                        txt1="Servicios"
                        txt2={userProfile.typeService
                            .map((type) => type.type)
                            .join(", ")}
                    />
                ) : (
                    ""
                )}
                <ProfileLine txt1="Ciudad" txt2={userProfile.city} />
                <ProfileLine txt1="Mail" txt2={userProfile.mail} />
            </ProfileData>

            {userProfile.pets &&
                userProfile.pets.map((pet, index) => (
                    <ProfileData key={index}>
                        <ProfileImg
                            imgProfile={pet.imgPet}
                            titleProfile={"Informacion de Mascota"}
                        />
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
                        {pet.details && (
                            <ProfileLine txt1="Detalles" txt2={pet.details} />
                        )}
                    </ProfileData>
                ))}
        </div>
    );
};

export default Profile;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./searchService.scss";
import CardSearch from "../../components/ux/cardSearch/cardSearch";
import { DATASERVICES } from "../../constants/services";
import FormButton from "../../components/ux/formButton/formButton";

const SearchService = () => {
    const location = useLocation(); // Acceder al estado de navegación
    const navigate = useNavigate();
    const dataServices = DATASERVICES;

    // Establecemos el filtro inicial basado en la navegación o por defecto "All"
    const [filter, setFilter] = useState(location.state?.filter ||"All");
    const [filterCity, setFilterCity] = useState("All");

    useEffect(() => {
        if (location.state?.filter) {
            setFilter(location.state.filter);
        }
    }, [location.state?.filter]);

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    const handleFilterCity = (e) => {
        if (e.target.value === "") {
            setFilterCity("All");
            return;
        } else {
            setFilterCity(e.target.value);
        }
    };

    const filteredItems = dataServices
        .map((service) => {
            if (service.typeUser === "service") {
                const filteredTypeServices = service.typeService.filter(
                    (item) => item.type === filter || filter === "All"
                );

                if (filteredTypeServices.length === 0) {
                    return null;
                }

                if (
                    filterCity !== "All" &&
                    !service.city
                        .toLowerCase()
                        .startsWith(filterCity.toLowerCase())
                ) {
                    return null;
                }

                return {
                    ...service,
                    typeService: filteredTypeServices,
                };
            }else{
                return null;
            }
        })
        .filter((item) => item !== null);

    const reset = () => {
        setFilter("All");
        setFilterCity("All");
        document.querySelector(".input-text").value = "";
    };

    return (
        <div className="SearchServiceWrapper">
            <div className="row">
                <div
                    className="col-auto"
                    style={{ position: "absolute", top: "3rem", left: "40px" }}
                >
                    <i
                        className="bi bi-chevron-left"
                        onClick={() => navigate("/user")}
                        style={{ fontSize: "35px" }}
                    ></i>
                </div>
            </div>
            <div className="searchCategories">
                <p style={{ textAlign: "center", marginBottom: "10px" }}>
                    Filtros
                </p>
                <div className="radioInputContainer">
                    <div className="searchInput">
                        <input
                            type="radio"
                            value="All"
                            checked={filter === "All"}
                            onChange={handleFilter}
                        />
                        <p>Todo</p>
                    </div>
                    <div className="searchInput">
                        <input
                            type="radio"
                            value="Guarderia"
                            checked={filter === "Guarderia"}
                            onChange={handleFilter}
                        />
                        <p>Guarderia</p>
                    </div>
                    <div className="searchInput">
                        <input
                            type="radio"
                            value="Paseador"
                            checked={filter === "Paseador"}
                            onChange={handleFilter}
                        />
                        <p>Paseador</p>
                    </div>
                    <div className="searchInput">
                        <input
                            type="radio"
                            value="Veterinaria"
                            checked={filter === "Veterinaria"}
                            onChange={handleFilter}
                        />
                        <p>Veterinaria</p>
                    </div>
                </div>
                <div>
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Buscar por ciudad"
                        onChange={handleFilterCity}
                    />
                </div>
                <div className="serchBtnContainer">
                    <FormButton txt="Limpiar" action={reset} />
                </div>
            </div>
            <div className="serviceCardContainer">
                {filteredItems.length === 0 ? (
                    <p>No hay servicios disponibles</p>
                ) : (
                    filteredItems.map((service, index) =>
                        service.typeService.map((item, index) => (
                            <CardSearch
                                key={index}
                                photo={service.photo}
                                name={service.name}
                                typeService={item.type}
                                price={item.price}
                                city={service.city}
                                textInfo={item.textInfo}
                                tags={item.tags}
                            />
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default SearchService;

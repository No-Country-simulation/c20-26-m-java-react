import { useState } from "react";
import "./searchService.scss";
import CardSearch from "../../components/ux/cardSearch/cardSearch";
import { DATASERVICES } from "../../constants/services";
import FormButton from "../../components/ux/formButton/formButton";
const SearchService = () => {

    const dataServices = DATASERVICES;
    const [filter, setFilter] = useState("All");
    const [filterCity, setFilterCity] = useState("All");

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
        //filtro por tipo de servicio
        .filter((service) => service.typeService === filter || filter === "All")

        //filtro por ciudad
        .filter((item) =>
            filterCity === "All"
                ? item
                : item.city.toLowerCase().startsWith(filterCity.toLowerCase())
        )
    ;

    const reset = () => {
        setFilter("All");
        setFilterCity("All");
        document.querySelector(".input-text").value = "";
    }

    return (
        <div className="SearchServiceWrapper">
            <div className="searchCategories">
                <p style={{textAlign:"center", marginBottom:"10px"}}>Filtros</p>
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
                    filteredItems.map((service, index) => (
                        <CardSearch
                            key={index}
                            photo={service.photo}
                            name={service.name}
                            typeService={service.typeService}
                            price={service.price}
                            city={service.city}
                            textInfo={service.textInfo}
                            tags={service.tags}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchService;

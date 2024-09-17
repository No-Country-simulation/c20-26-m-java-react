import PropTypes from "prop-types";
import "./cardSearch.scss";
import FormButton from "../formButton/formButton";

const CardSearch = ({ photo, name, typeService, price, city, textInfo, tags }) => {
    return (
        <div className="cardSearchWrapper">
            <div className="searchPersonalInfo">
                <div className="searchPhotoContainer">
                    <img src={photo} alt="personalPhoto" />
                </div>
                <p>{name}</p>
            </div>
            <div className="searchInfo">
                <div className="searchService">
                    <div>
                        <h4>{typeService}</h4>
                        <p>{city}</p>
                    </div>
                    <h4>${price}</h4>
                </div>
                <p>{textInfo}</p>
                <div className="tagsContainer">
                    {tags.map((tag, index) => (
                        <div className="tagWrapper" key={index}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                <div className="buttonContainer">
                    <FormButton txt="Contratar" />
                </div>
            </div>
        </div>
    );
};

// PropTypes validation
CardSearch.propTypes = {
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    typeService: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    textInfo: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardSearch;

import React, { useState } from 'react';
import './SearchBar.css'; // Asegúrate de crear este archivo CSS para los estilos

// Componente de barra de búsqueda
function SearchBar({ onSearch }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    // Maneja la acción de búsqueda
    const handleSearch = () => {
        if (name.trim() === '' && category.trim() === '') {
            alert('Por favor, ingrese al menos un criterio de búsqueda.');
            return;
        }
        onSearch({ name, category });
    };

    // Maneja la acción de limpiar
    const handleClear = () => {
        setName('');
        setCategory('');
    };

    return (
        <div className="search-bar">
            <div className="search-bar__input-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="search-bar__input-group">
                <label htmlFor="category">Categoría:</label>
                <input
                    id="category"
                    type="text"
                    placeholder="Buscar por categoría..."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="search-bar__buttons">
                <button onClick={handleSearch}>Buscar</button>
                <button onClick={handleClear}>Limpiar</button>
            </div>
        </div>
    );
}

export default SearchBar;
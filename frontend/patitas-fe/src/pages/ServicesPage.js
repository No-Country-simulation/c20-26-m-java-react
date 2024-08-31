import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

// Página de servicios donde se integrará la barra de búsqueda
function ServicesPage() {
  const [services, setServices] = useState([]);

  // Maneja la búsqueda y la solicitud al backend
  const handleSearch = (criteria) => {
    fetch(`/api/services/search?name=${criteria.name}&category=${criteria.category}`)
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error("Error fetching services:", error));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.name} - {service.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;
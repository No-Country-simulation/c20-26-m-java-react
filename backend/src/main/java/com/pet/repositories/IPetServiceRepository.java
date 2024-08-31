package com.pet.repositories;

import com.pet.models.PetService;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPetServiceRepository extends BaseRepository<PetService, Long> {

    // Metodo personalizado para buscar servicios de mascotas
    List<PetService> findByNameContainingAndCategoryContaining(String name, String category);
}
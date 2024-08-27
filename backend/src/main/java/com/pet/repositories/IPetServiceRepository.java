package com.pet.repositories;

import com.pet.models.PetService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetServiceRepository extends JpaRepository<PetService, Long> {
    
}

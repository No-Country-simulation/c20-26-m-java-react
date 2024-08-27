package com.pet.repository;

import com.pet.model.PetService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetServiceRepository extends JpaRepository<PetService, Long> {
    
}

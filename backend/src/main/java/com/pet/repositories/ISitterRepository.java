package com.pet.repositories;

import com.pet.models.Sitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISitterRepository extends JpaRepository<Sitter, Long>{
    
}

package com.pet.repository;

import com.pet.model.Sitter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISitterRepository extends JpaRepository<Sitter, Long>{
    
}

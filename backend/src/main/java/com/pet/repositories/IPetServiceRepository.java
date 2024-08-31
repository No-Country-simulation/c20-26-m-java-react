package com.pet.repositories;

import com.pet.models.PetService;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetServiceRepository extends BaseRepository<PetService, Long>{

}

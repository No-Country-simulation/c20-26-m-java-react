package com.pet.repositories;

import com.pet.models.Pet;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetRepository extends BaseRepository<Pet, Long>{

}

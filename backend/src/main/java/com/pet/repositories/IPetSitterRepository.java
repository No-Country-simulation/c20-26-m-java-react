package com.pet.repositories;

import com.pet.models.PetSitter;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPetSitterRepository extends BaseRepository<PetSitter, Long>{
    List<PetSitter> findByApproved(boolean approved);

}

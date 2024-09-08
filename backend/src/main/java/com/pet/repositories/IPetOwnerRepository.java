package com.pet.repositories;

import com.pet.models.PetOwner;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetOwnerRepository extends BaseRepository<PetOwner, Long> {
    PetOwner findByUsername(String username);
}

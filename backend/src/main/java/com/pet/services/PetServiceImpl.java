package com.pet.services;

import com.pet.models.Pet;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceImpl extends BaseServiceImpl<Pet, Long> implements PetSer {

    @Autowired
    private IPetRepository petRepository;

    public PetServiceImpl(BaseRepository<Pet, Long> baseRepository) {
        super(baseRepository);
    }
}

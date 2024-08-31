package com.pet.services.services;

import com.pet.models.Pet;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetRepository;
import com.pet.services.BaseServiceImpl;
import com.pet.services.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceImpl extends BaseServiceImpl<Pet, Long> implements PetService {

    @Autowired
    private IPetRepository petRepository;

    public PetServiceImpl(BaseRepository<Pet, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    protected BaseRepository<Pet, Long> getRepository() {
        return petRepository;
    }
}
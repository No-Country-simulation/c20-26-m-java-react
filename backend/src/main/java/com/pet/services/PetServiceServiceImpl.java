package com.pet.services;

import com.pet.models.PetService;
import com.pet.repositories.BaseRepository;

import com.pet.repositories.IPetServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceServiceImpl extends BaseServiceImpl<PetService, Long> implements PetServiceService {

    @Autowired
    private IPetServiceRepository petServiceRepository;

    public PetServiceServiceImpl(BaseRepository<PetService, Long> baseRepository) {
        super(baseRepository);
    }
}

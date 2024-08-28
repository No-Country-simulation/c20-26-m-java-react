package com.pet.services;

import com.pet.models.PetSitter;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetSitterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetSitterServiceImpl extends BaseServiceImpl<PetSitter, Long> implements PetSitterService {

    @Autowired
    private IPetSitterRepository petSitterRepository;

    public PetSitterServiceImpl(BaseRepository<PetSitter, Long> baseRepository) {
        super(baseRepository);
    }
}
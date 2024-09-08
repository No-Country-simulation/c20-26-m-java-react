package com.pet.services.services;

import com.pet.models.PetService;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetServiceRepository;
import com.pet.services.BaseServiceImpl;
import com.pet.services.PetServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceServiceImpl extends BaseServiceImpl<PetService, Long> implements PetServiceService {

    private final IPetServiceRepository petServiceRepository;

    @Autowired
    public PetServiceServiceImpl(IPetServiceRepository petServiceRepository) {
        super(petServiceRepository);
        this.petServiceRepository = petServiceRepository;
    }

    @Override
    public List<PetService> searchServices(String name, String category) {
        return petServiceRepository.findByNameContainingAndCategoryContaining(name, category);
    }

    @Override
    protected BaseRepository<PetService, Long> getRepository() {
        return petServiceRepository;
    }
}
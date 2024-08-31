package com.pet.services.services;

import com.pet.models.PetOwner;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetOwnerRepository;
import com.pet.services.BaseServiceImpl;
import com.pet.services.PetOwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetOwnerServiceImpl extends BaseServiceImpl<PetOwner, Long> implements PetOwnerService {

    @Autowired
    private IPetOwnerRepository petOwnerRepository;

    public PetOwnerServiceImpl(BaseRepository<PetOwner, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    protected BaseRepository<PetOwner, Long> getRepository() {
        return petOwnerRepository;
    }
}
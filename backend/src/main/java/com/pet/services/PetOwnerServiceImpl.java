package com.pet.services;

import com.pet.models.PetOwner;
import com.pet.models.PetService;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetOwnerServiceImpl extends BaseServiceImpl<PetOwner, Long> implements PetOwnerService {

    @Autowired
    private IPetOwnerRepository petOwnerRepository;

    public PetOwnerServiceImpl(BaseRepository<PetOwner, Long> baseRepository) {
        super(baseRepository);
    }
}

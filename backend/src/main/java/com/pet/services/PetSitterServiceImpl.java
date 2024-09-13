package com.pet.services;

import com.pet.models.PetSitter;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetSitterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetSitterServiceImpl extends BaseServiceImpl<PetSitter, Long> implements PetSitterService {

    @Autowired
    private IPetSitterRepository petSitterRepository;

    public PetSitterServiceImpl(BaseRepository<PetSitter, Long> baseRepository) {
        super(baseRepository);
    }

    public List<PetSitter> findPendingApprovalPetSitters() {
        return petSitterRepository.findByApproved(false);
    }

    public boolean approvePetSitter(Long id) {
        Optional<PetSitter> optionalPetSitter = petSitterRepository.findById(id);
        if (optionalPetSitter.isPresent()) {
            PetSitter petSitter = optionalPetSitter.get();
            petSitter.setApproved(true);
            petSitterRepository.save(petSitter);
            return true;
        }
        return false;
    }
}
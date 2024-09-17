package com.pet.services;

import com.pet.models.PetSitter;

import java.util.List;

public interface PetSitterService extends BaseService<PetSitter, Long>{

    public List<PetSitter> findPendingApprovalPetSitters();
    public boolean approvePetSitter(Long id);
}

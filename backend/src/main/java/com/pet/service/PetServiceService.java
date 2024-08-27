package com.pet.service;

import com.pet.model.PetService;
import com.pet.repository.IPetServiceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceService implements IPetServiceService{
    
    @Autowired
    private IPetServiceRepository petServRepo;

    @Override
    public List<PetService> getAllPetServices() {
        List <PetService> PetServicesList= petServRepo.findAll();
        return PetServicesList;    
    }

    @Override
    public PetService findPetService(Long id) {
        PetService petServ = petServRepo.findById(id).orElse(null);
        return petServ;
    }
    
    @Override
    public void savePetService(PetService petServ) {
        petServRepo.save(petServ);
    }

    @Override
    public void deletePetService(Long id) {
        petServRepo.deleteById(id);

    }

    @Override
    public void editPetService(PetService petServ) {
        this.savePetService(petServ);
    }
}

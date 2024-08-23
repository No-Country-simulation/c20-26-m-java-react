package com.pet.service;

import com.pet.model.PetService;
import java.util.List;

public interface IPetServiceService {
    
    public List <PetService> getAllPetServices();
    
    public PetService findPetService(Long id);
    
    public void savePetService(PetService petServ);
    
    public void deletePetService(Long id);
    
    public void editPetService(PetService petServ);
}

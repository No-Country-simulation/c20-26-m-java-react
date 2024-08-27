package com.pet.services;

import com.pet.models.PetService;
import java.util.List;

public interface IPetServiceService {
    
    public List <PetService> getAllPetServices();
    
    public PetService findPetService(Long id);
    
    public void savePetService(PetService petServ);
    
    public void deletePetService(Long id);
    
    public void editPetService(PetService petServ);
}

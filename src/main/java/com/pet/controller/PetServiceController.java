package com.pet.controller;

import com.pet.model.PetService;
import com.pet.service.IPetServiceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PetServiceController {

    @Autowired
    private IPetServiceService petServServ;

    @GetMapping ("/services")
    public List <PetService> getAllPetServices(){
        return petServServ.getAllPetServices();
    }
    
    @PostMapping ("/services/create")
    public String savePetService(@RequestBody PetService petServ){
        petServServ.savePetService(petServ);
        
        return "El servicio se guardó correctamente";
    }
    
    @DeleteMapping("/services/delete/{id}")
    public String deletePetService(@PathVariable Long id){
        petServServ.deletePetService(id);
        
        return "El servicio se borró correctamente";
    }
    
    @PutMapping("/services/edit")
    public PetService editPetService(@RequestBody PetService petServ){
        petServServ.editPetService(petServ);
        
        return petServServ.findPetService(petServ.getServiceCode());
    }
}

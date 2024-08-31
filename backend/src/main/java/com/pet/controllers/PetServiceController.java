package com.pet.controllers;

import com.pet.models.PetService;
import com.pet.services.PetServiceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pet-services")
public class PetServiceController extends BaseControllerImpl<PetService, PetServiceServiceImpl> {

    @Autowired
    private PetServiceServiceImpl petServiceService;

    // Endpoint para buscar servicios de mascotas
    @GetMapping("/search")
    public List<PetService> searchServices(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category) {
        return petServiceService.searchServices(name, category);
    }
}

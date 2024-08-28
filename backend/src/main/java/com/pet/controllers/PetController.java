package com.pet.controllers;

import com.pet.models.Pet;
import com.pet.services.PetServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pets")
public class PetController extends BaseControllerImpl<Pet, PetServiceImpl>{

}
package com.pet.controllers;

import com.pet.models.PetOwner;
import com.pet.services.PetOwnerServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pet-owners")
public class PetOwnerController extends BaseControllerImpl<PetOwner, PetOwnerServiceImpl>{

}
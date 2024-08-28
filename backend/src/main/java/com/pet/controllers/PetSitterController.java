package com.pet.controllers;

import com.pet.models.PetSitter;

import com.pet.services.PetSitterServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pet-sitters")
public class PetSitterController extends BaseControllerImpl<PetSitter, PetSitterServiceImpl>{

}
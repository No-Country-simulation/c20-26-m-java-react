package com.pet.controllers;

import com.pet.models.PetService;

import com.pet.services.PetServiceServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/services")
public class PetServiceController extends BaseControllerImpl<PetService , PetServiceServiceImpl>{

}

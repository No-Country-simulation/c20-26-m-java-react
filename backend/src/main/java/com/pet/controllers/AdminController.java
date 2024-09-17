package com.pet.controllers;

import com.pet.models.Admin;
import com.pet.models.PetSitter;
import com.pet.services.AdminServiceImpl;
import com.pet.services.PetSitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/admins")
public class AdminController extends BaseControllerImpl<Admin, AdminServiceImpl>{

}
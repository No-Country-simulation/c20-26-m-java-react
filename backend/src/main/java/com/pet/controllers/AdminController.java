package com.pet.controllers;

import com.pet.models.Admin;
import com.pet.services.AdminServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/admins")
public class AdminController extends BaseControllerImpl<Admin, AdminServiceImpl>{

}
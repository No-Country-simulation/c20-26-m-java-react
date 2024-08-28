package com.pet.controllers;

import com.pet.models.Qualification;
import com.pet.services.QualificationServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/qualifications")
public class QualificationController extends BaseControllerImpl<Qualification, QualificationServiceImpl>{

}
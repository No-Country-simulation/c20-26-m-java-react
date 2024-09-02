package com.pet.controllers;

import com.pet.models.Reservation;
import com.pet.services.ReservationServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/reservations")
public class ReservationController extends BaseControllerImpl<Reservation, ReservationServiceImpl>{

}
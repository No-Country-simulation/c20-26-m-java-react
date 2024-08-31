package com.pet.controllers;

import com.pet.models.PetSitter;
import com.pet.services.PetSitterServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pet-sitters")
public class PetSitterController extends BaseControllerImpl<PetSitter, PetSitterServiceImpl> {

    @Autowired
    private PetSitterServiceImpl petSitterService;

    // Endpoint para buscar cuidadores de mascotas
    @GetMapping("/search")
    public ResponseEntity<Page<PetSitter>> searchPetSitters(
            @RequestParam(value = "service", required = false) String service,
            @RequestParam(value = "location", required = false) String location,
            @RequestParam(value = "startDate", required = false) LocalDate startDate,
            @RequestParam(value = "endDate", required = false) LocalDate endDate,
            Pageable pageable) {
        try {
            Page<PetSitter> result = petSitterService.searchPetSitters(service, location, startDate, endDate, pageable);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Please try again later.";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
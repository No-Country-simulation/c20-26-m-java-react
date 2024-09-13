package com.pet.controllers;

import com.pet.models.PetSitter;

import com.pet.services.PetSitterService;
import com.pet.services.PetSitterServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/pet-sitters")
public class PetSitterController extends BaseControllerImpl<PetSitter, PetSitterServiceImpl>{
    @Autowired
    private PetSitterService petSitterService;

    @GetMapping("/pending")
    @ResponseBody
    @PreAuthorize("hasRole('ADMIN')")
    public List<PetSitter> getPendingApprovalPetSitters() {
        return petSitterService.findPendingApprovalPetSitters();
    }

    @PostMapping("/approve/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> approvePetSitter(@PathVariable Long id) {
        boolean approved = petSitterService.approvePetSitter(id);
        if (approved) {
            return ResponseEntity.ok("PetSitter approved.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("PetSitter not found.");
        }
    }
}
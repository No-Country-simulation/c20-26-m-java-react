package com.pet.controllers;

import com.pet.dtos.requests.QualificationCreateDTO;
import com.pet.dtos.requests.QualificationUpdateDTO;
import com.pet.dtos.responses.QualificationResponseDTO;
import com.pet.exceptions.ResourceNotFoundException;
import com.pet.models.Qualification;
import com.pet.services.QualificationService;
import com.pet.services.QualificationServiceImpl;
import jakarta.validation.Valid;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
//@PreAuthorize("denyAll()")
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/qualifications")
public class QualificationController extends BaseControllerImpl<Qualification, QualificationServiceImpl> {

    @Autowired
    private QualificationService qualificationService;

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createQualification(@Valid @RequestBody QualificationCreateDTO qualificationCreateDTO) {
        Map<String, String> response = new HashMap<>();
        try {
            QualificationResponseDTO createdQualification = qualificationService.createQualification(qualificationCreateDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("message", "Calificación creada correctamente"));
        } catch (ResourceNotFoundException e) {
            response.put("message", "Cuidador no encontrado.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/{qualificationId}")
    public ResponseEntity<QualificationResponseDTO> updateQualification(@PathVariable Long qualificationId, @Valid @RequestBody QualificationUpdateDTO qualificationUpdateDTO) {
        try {
            QualificationResponseDTO updatedQualification = qualificationService.updateQualification(qualificationId, qualificationUpdateDTO);
            return ResponseEntity.ok(updatedQualification);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{qualificationId}")
    public ResponseEntity<QualificationResponseDTO> getQualificationById(@PathVariable Long qualificationId) {
        try {
            QualificationResponseDTO qualification = qualificationService.getQualificationById(qualificationId);
            return ResponseEntity.ok(qualification);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<QualificationResponseDTO>> getAllQualifications() {
        try {
            List<QualificationResponseDTO> qualifications = qualificationService.getAllQualifications();
            return ResponseEntity.ok(qualifications);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getByPetSitterId/{petSitterId}")
    public ResponseEntity<List<QualificationResponseDTO>> getQualificationsByPetSitterId(@PathVariable Long petSitterId) {
        try {
            List<QualificationResponseDTO> qualifications = qualificationService.getQualificationsByPetSitterId(petSitterId);
            return ResponseEntity.ok(qualifications);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}

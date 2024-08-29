package com.pet.controllers;

import com.pet.dtos.request.ReservationRequestDTO;
import com.pet.dtos.responses.ReservationResponseDTO;
import com.pet.exceptions.PetOwnerNotAvailableException;
import com.pet.exceptions.PetSitterNotAvailableException;
import com.pet.exceptions.ResourceNotFoundException;
import com.pet.models.Reservation;
import com.pet.services.ReservationService;
import com.pet.services.ReservationServiceImpl;
import jakarta.validation.Valid;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/reservations")
public class ReservationController extends BaseControllerImpl<Reservation, ReservationServiceImpl>{

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/createReservation")
    public ResponseEntity<Map<String, String>> createReservation(@Valid @RequestBody ReservationRequestDTO reservationRequestDTO) {
        Map<String, String> response = new HashMap<>();
        try {
            ReservationResponseDTO createdReservation = reservationService.createReservation(reservationRequestDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("message", "Reservación creada correctamente"));
        } catch (ResourceNotFoundException e) {
            response.put("message", "Cuidador o mascota no encontrados.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (PetSitterNotAvailableException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (PetOwnerNotAvailableException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @PutMapping("/updateReservation/{reservationId}")
    public ResponseEntity<ReservationResponseDTO> updateReservation(@PathVariable Long reservationId, @Valid @RequestBody ReservationRequestDTO reservationRequestDTO) {
        try {
            ReservationResponseDTO updatedReservation = reservationService.updateReservation(reservationId, reservationRequestDTO);
            return ResponseEntity.ok(updatedReservation);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    
    @GetMapping("/getReservationById/{reservationId}")
    public ResponseEntity<ReservationResponseDTO> getReservationById(@PathVariable Long reservationId) {
        try {
            ReservationResponseDTO reservation = reservationService.getReservationById(reservationId);
            return ResponseEntity.ok(reservation);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getByPetSitterId/{petSitterId}")
    public ResponseEntity<List<ReservationResponseDTO>> getReservationsByPetSitterId(@PathVariable Long petSitterId) {
        try {
            List<ReservationResponseDTO> reservations = reservationService.getReservationsByPetSitterId(petSitterId);
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getByPetId/{petId}")
    public ResponseEntity<List<ReservationResponseDTO>> getAppointmentsByPatientId(@PathVariable Long petId) {
        try {
            List<ReservationResponseDTO> reservations = reservationService.getReservationsByPetSitterId(petId);
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<ReservationResponseDTO>> getAllReservations() {
        try {
            List<ReservationResponseDTO> reservations = reservationService.getAllReservations();
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
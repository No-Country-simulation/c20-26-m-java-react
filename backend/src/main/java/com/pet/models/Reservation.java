package com.pet.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reservation")
public class Reservation extends Base {
    @Column(name = "day", nullable = false)
    private Day reservationDay;
    @Column(name = "hour", nullable = false)
    private AvailableHours reservationHour;
    @Column(name = "reservation_description", length = 120)
    private String reservationDescription;
    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDate createdAt;
    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDate updatedAt;
    @ManyToOne
    @JoinColumn(name = "pet_owner_id", nullable = false)
    @JsonBackReference("owner-reservations")
    private PetOwner petOwner;
    @ManyToOne
    @JoinColumn(name = "pet_id", nullable = false)
    @JsonBackReference("pet-reservations")
    private Pet pet;
    @ManyToOne
    @JoinColumn(name = "pet_service_id", nullable = false)
    @JsonBackReference("pet-service-reservations")
    private PetService petService;
    @ManyToOne
    @JoinColumn(name = "pet_sitter_id", nullable = false)
    @JsonBackReference("pet-sitter-reservations")
    private PetSitter petSitter;
}


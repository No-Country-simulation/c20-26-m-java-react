package com.pet.models;

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
    @JoinColumn(name = "petowner_id", nullable = false)
    private PetOwner petOwner;
    @ManyToOne
    @JoinColumn(name = "pet_id", nullable = false)
    private Pet pet;
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private PetService petService;
    //revisar
    @ManyToOne
    @JoinColumn(name = "petsitter_id", nullable = false)
    private PetSitter petSitter;
}


package com.pet.models;

import com.pet.enumerations.Day;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import lombok.Builder;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reservation")
public class Reservation extends Base {
    private Day reservationDay;
    //@Column(name = "date", nullable = false)
    //private LocalDateTime date;
    @Column(name = "name", nullable = false)
    private String name;
    @ManyToOne
    @JoinColumn(name = "pet_id", nullable = false)
    private Pet pet;
    @ManyToOne
    @JoinColumn(name = "pet_owner_id", nullable = false)
    private PetOwner petOwner;
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private PetService petService;
}


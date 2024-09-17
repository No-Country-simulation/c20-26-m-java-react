package com.pet.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PetOwner extends UserSec {


    @OneToMany(mappedBy = "petOwner", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("owner-pets")
    private List<Pet> pets = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("owner-reservations")
    private List<Reservation> reservations;
}

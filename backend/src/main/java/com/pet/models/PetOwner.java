package com.pet.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
//@Table(name = "pet_owner")
public class PetOwner extends UserSec {
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pet> pets;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations;
}

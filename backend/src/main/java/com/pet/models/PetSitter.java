package com.pet.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class PetSitter extends UserSec {
    @ManyToMany
    @JoinTable(name = "pet_sitter_service",
            joinColumns = @JoinColumn(name = "pet_sitter_id"),
            inverseJoinColumns = @JoinColumn(name = "pet_service_id"))
//    @JsonManagedReference("pet-sitter-pet-services")
    private List<PetService> petServices;
    private boolean approved = false; // approved by admin to be presented on site.
    @OneToMany(mappedBy = "petSitter", cascade = {CascadeType.ALL}, orphanRemoval = true)
    @JsonManagedReference("pet-sitter-qualifications")
    private List<Qualification> qualifications = new ArrayList<>();
    @OneToMany(mappedBy = "petSitter", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("pet-sitter-reservations")
    private List<Reservation> reservations = new ArrayList<>();
}

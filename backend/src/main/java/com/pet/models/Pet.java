package com.pet.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pet")
public class Pet extends Base {
    private String name;
    private String species;
    private String race;
    private String description;
    private String photo;
    
    @Column(name = "pet_gender")
    private String petGender;
    
    private Integer age;
    private String behavior;
    private Boolean vaccinated;

    @ManyToOne
    @JoinColumn(name = "fk_pet_owner", nullable = false)
    @JsonBackReference("owner-pets")
    private PetOwner petOwner;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "pet")
    @JsonManagedReference("pet-reservations")
    private List<Reservation> reservations;
}


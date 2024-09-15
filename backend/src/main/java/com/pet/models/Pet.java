package com.pet.models;

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
    
//    @ManyToOne()
//    @JoinColumn(name = "pet_owner_id", nullable = false)
//    private PetOwner petOwner;
//
//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "pet")
//    private List<Reservation> reservations;
}


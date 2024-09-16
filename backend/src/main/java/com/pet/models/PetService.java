package com.pet.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pet_service")
public class PetService extends Base {

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false)
    private ServiceName name;
    private String serviceDescription;
    private String location;
    private String specialConditions;
    
    @Column(name = "price", nullable = false)
    private Double price;
    @OneToMany(mappedBy = "petService", cascade = {CascadeType.ALL}, orphanRemoval = true)
    @JsonManagedReference("petService-qualifications")
    private List<Qualification> qualifications = new ArrayList<>();
    
//    @ManyToMany(mappedBy = "petService")
//    private List<PetSitter> petSitters;
    
//    @OneToMany(mappedBy = "petService")
//    private List<Reservation> reservations;
}

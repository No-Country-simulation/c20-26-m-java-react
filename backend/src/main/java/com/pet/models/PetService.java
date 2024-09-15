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
    
//    @ManyToMany(mappedBy = "petServices")
//    private List<PetSitter> petSitters;
    
//    @OneToMany(mappedBy = "petService")
//    private List<Reservation> reservations;
}

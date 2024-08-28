package com.pet.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "service")
public class PetService extends Base {

    @Enumerated(EnumType.STRING)
    @Column(name = "name", nullable = false)
    private ServiceName name;
    private String serviceDescription;
    private String location;
    private String specialConditions;
    @Column(name = "price", nullable = false)
    private Double price;
}

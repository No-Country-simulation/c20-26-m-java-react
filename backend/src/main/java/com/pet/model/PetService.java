package com.pet.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class PetService {
    
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long serviceCode;
    public String name;
    public String serviceDescription;
    public String location;
    public String specialConditions;
    public double price;
    @OneToOne
    public Sitter aSitter;

    public PetService() {
    }

    public PetService(long serviceCode, String name, String serviceDescription, String location, String specialConditions, double price, Sitter aSitter) {
        this.serviceCode = serviceCode;
        this.name = name;
        this.serviceDescription = serviceDescription;
        this.location = location;
        this.specialConditions = specialConditions;
        this.price = price;
        this.aSitter = aSitter;
    } 
}

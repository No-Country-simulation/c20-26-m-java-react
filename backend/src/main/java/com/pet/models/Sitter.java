package com.pet.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter@Setter
@Entity
public class Sitter {
    
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    public long id;
    public String name;
    public String surname;
    public String dni;
    public String email;
    public int age;

    public Sitter() {
    }

    public Sitter(long id, String name, String surname, String dni, String email, int age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.email = email;
        this.age = age;
    }
    
}

package com.pet.models;

import jakarta.persistence.Entity;
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
@Table(name = "pet_sitter")
public class PetSitter extends User {
    @OneToMany
    private List<PetService> servicesList;

    @OneToMany
    private List<Qualification> qualificationList;
}

package com.pet.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "pet_sitter")
public class PetSitter extends User {
    @OneToMany(mappedBy = "petSitter")
    private List<PetService> servicesList;

    @OneToMany
    private List<Qualification> qualificationList;
}

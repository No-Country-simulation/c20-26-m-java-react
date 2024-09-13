package com.pet.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
//@Table(name = "pet_sitter")
public class PetSitter extends UserSec {
    @ManyToMany
    @JoinTable(
        name = "pet_sitter_service",
        joinColumns = @JoinColumn(name = "pet_sitter_id"),
        inverseJoinColumns = @JoinColumn(name = "pet_service_id")
    )
    private List<PetService> petServices;
    private boolean approved = false; // approved by admin to be presented on site.

    @OneToMany(mappedBy = "petSitter")
    private List<Qualification> qualificationList;
}

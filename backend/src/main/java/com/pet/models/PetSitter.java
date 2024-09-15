package com.pet.models;

import jakarta.persistence.*;
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
    @OneToMany(cascade = CascadeType.ALL)
    private List<PetService> petServices;

    private boolean approved = false; // approved by admin to be presented on site.

    @OneToMany
    private List<Qualification> qualificationList;
}

package com.pet.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
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

    @OneToMany(mappedBy = "petSitter", cascade = {CascadeType.ALL}, orphanRemoval = true)
    @JsonManagedReference("petSitter-qualifications")
    private List<Qualification> qualifications = new ArrayList<>();
}

package com.pet.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "qualification")
public class Qualification extends Base {
    @Column(name = "value", nullable = false)
    private Integer value;
    private String description;
    @ManyToOne
    @JoinColumn(name = "pet_sitter_id", nullable = false)
    private PetSitter petSitter;

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private PetService petService;
}

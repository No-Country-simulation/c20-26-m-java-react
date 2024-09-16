package com.pet.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "qualification")
public class Qualification extends Base {
    @Column(name = "value", nullable = false)
    private Integer value;
    private String description;

    @ManyToOne
    @JoinColumn(name = "fk_pet_service", nullable = false)
    @JsonBackReference("petService-qualifications")
    private PetService petService;

    @ManyToOne
    @JoinColumn(name = "fk_pet_sitter", nullable = false)
    @JsonBackReference("petSitter-qualifications")
    private PetSitter petSitter;
}

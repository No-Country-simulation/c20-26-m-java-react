package com.pet.dtos.responses;

import com.pet.models.Qualification;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QualificationResponseDTO {

    private Long id;
    private Integer value;
    private String description;
    private Long petSitterId;
    private Long petServiceId;


    public QualificationResponseDTO(Qualification qualification) {
        this.id = qualification.getId();
        this.petSitterId = qualification.getPetSitter().getId();
        this.petServiceId = qualification.getPetService().getId();
        this.value = qualification.getValue();
        this.description = qualification.getDescription();
    }
}

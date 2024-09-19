package com.pet.dtos.requests;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QualificationUpdateDTO {
    @NotNull
    private Long petSitterId;

    @NotNull
    private Long petServiceId;

    @NotNull
    private Integer value;

    private String description;
}

package com.pet.dtos.requests;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class QualificationCreateDTO {
    @NotNull(message = "Se requiere el valor de la calificación.")
    private Integer value;
    @NotNull(message = "Se requiere el ID del Pet Sitter")
    private Long petSitterId;
    @NotNull(message = "Se requiere el ID del Pet Service")
    private Long petServiceId;
    private String description;
}

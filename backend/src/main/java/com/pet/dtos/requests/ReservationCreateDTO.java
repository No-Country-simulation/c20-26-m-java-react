package com.pet.dtos.requests;

import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import com.pet.models.PetService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReservationCreateDTO {

    @NotNull(message = "Se requiere el ID del cuidador.")
    private Long petSitterId;
    @NotNull(message = "Se requiere el ID del dueño.")
    private Long petOwnerId;
    @NotNull(message = "Se requiere el ID de la mascota.")
    private Long petId;
    @NotNull(message = "Se requiere la fecha de la reserva.")
    private Day reservationDay;
    @NotNull(message = "Se requiere la hora de la reserva.")
    private AvailableHours reservationHour;
    @Size(max = 120, message = "La descripción de la reserva no debe exceder los 120 caracteres.")
    private String reservationDescription;
    @NotNull(message = "Se requiere el tipo del servicio.")
    private Long petServiceId;
}

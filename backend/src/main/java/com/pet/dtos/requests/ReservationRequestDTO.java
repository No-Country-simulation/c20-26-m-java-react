package com.pet.dtos.request;

import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import jakarta.validation.constraints.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReservationRequestDTO {
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
}

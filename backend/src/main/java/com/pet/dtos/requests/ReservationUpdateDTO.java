package com.pet.dtos.requests;

import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReservationUpdateDTO {
    private Long petSitterId;
    private Long petOwnerId;
    private Long petId;
    private Day reservationDay;
    private AvailableHours reservationHour;
    @Size(max = 120, message = "La descripción de la reserva no debe exceder los 120 caracteres.")
    private String reservationDescription;
    private Long petServiceId;
}

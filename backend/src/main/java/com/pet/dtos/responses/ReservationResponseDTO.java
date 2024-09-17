package com.pet.dtos.responses;

import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import com.pet.models.Reservation;
import java.time.LocalDate;
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
public class ReservationResponseDTO {
    
    private Long reservationId;
    private Long petSitterId;
    private String fullnamePetSitter;
    private Long petId;
    private Long petOwnerId;
    private Long petServiceId;
    private String fullnamePetOwner;
    private Day reservationDay;
    private AvailableHours reservationHour;
    private String reservationDescription;
    private LocalDate createdAt;
    private LocalDate updatedAt;

    public ReservationResponseDTO(Reservation reservation) {
    this.reservationId = reservation.getId();
    this.petServiceId = reservation.getPetService().getId();
    this.petSitterId = reservation.getPetSitter().getId();
    this.fullnamePetSitter = reservation.getPetSitter().getName()+ " " +reservation.getPetSitter().getSurname();
    this.petOwnerId = reservation.getPetOwner().getId();
    this.fullnamePetOwner = reservation.getPetOwner().getName() + " " + reservation.getPetOwner().getSurname();
    this.petId = reservation.getPet().getId();
    this.reservationDay = reservation.getReservationDay();
    this.reservationHour = reservation.getReservationHour();
    this.reservationDescription = reservation.getReservationDescription();
    this.createdAt = reservation.getCreatedAt();
    this.updatedAt = reservation.getUpdatedAt();
    }
}

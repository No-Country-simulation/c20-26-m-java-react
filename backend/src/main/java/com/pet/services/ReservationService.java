package com.pet.services;

import com.pet.dtos.request.ReservationRequestDTO;
import com.pet.dtos.responses.ReservationResponseDTO;
import com.pet.models.Reservation;
import java.util.List;

public interface ReservationService extends BaseService <Reservation, Long>{

    ReservationResponseDTO createReservation(ReservationRequestDTO reservationRequestDTO);
    ReservationResponseDTO updateReservation(Long reservationId, ReservationRequestDTO reservationRequestDTO);
    ReservationResponseDTO getReservationById(Long reservationId);
    List<ReservationResponseDTO> getReservationsByPetSitterId(Long petSitterId);
    List<ReservationResponseDTO> getReservationsByPetId(Long petId);
    List<ReservationResponseDTO> getReservationsByPetOwnerId(Long petOwnerId);
    List<ReservationResponseDTO> getAllReservations();
}

package com.pet.repositories;

import com.pet.enumerations.AvailableHours;
import com.pet.enumerations.Day;
import com.pet.models.PetOwner;
import com.pet.models.PetSitter;
import com.pet.models.Reservation;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservationRepository extends BaseRepository<Reservation, Long>{

    List <Reservation> findByPetSitterId(Long petSitterId);
    List <Reservation> findByPetOwnerId(Long petOwnerId);
    List <Reservation> findByPetId(Long petId);
    boolean existsByPetSitterAndReservationDayAndReservationHour(PetSitter petSitter, Day reservationDay, AvailableHours reservationHour);
    boolean existsByPetOwnerAndReservationDayAndReservationHour(PetOwner petOwner, Day appointmentDay, AvailableHours appointmentHour); 
}

package com.pet.repositories;

import com.pet.models.Qualification;
import com.pet.models.Reservation;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservationRepository extends BaseRepository<Reservation, Long>{

}

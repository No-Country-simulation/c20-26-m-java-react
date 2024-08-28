package com.pet.services;

import com.pet.models.Reservation;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl extends BaseServiceImpl<Reservation, Long> implements ReservationService {

    @Autowired
    private IReservationRepository reservationRepository;

    public ReservationServiceImpl(BaseRepository<Reservation, Long> baseRepository) {
        super(baseRepository);
    }
}

package com.pet.repositories;

import com.pet.models.PetSitter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface IPetSitterRepository extends BaseRepository<PetSitter, Long> {

    // Metodo personalizado para buscar cuidadores de mascotas
    Page<PetSitter> findByServices_NameContainingAndAddressContainingAndAvailabilityBetween(
            String service,
            String location,
            LocalDate startDate,
            LocalDate endDate,
            Pageable pageable);
}
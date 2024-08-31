package com.pet.services;

import com.pet.models.PetSitter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface PetSitterService extends BaseService<PetSitter, Long> {

    Page<PetSitter> searchPetSitters(String service, String location, LocalDate startDate, LocalDate endDate, Pageable pageable);
}
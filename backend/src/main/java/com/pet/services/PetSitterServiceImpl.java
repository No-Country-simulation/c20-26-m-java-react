package com.pet.services;

import com.pet.models.PetSitter;
import com.pet.repositories.IPetSitterRepository;
import com.pet.repositories.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class PetSitterServiceImpl extends BaseServiceImpl<PetSitter, Long> implements PetSitterService {

    private final IPetSitterRepository petSitterRepository;

    // Constructor que inicializa el repositorio
    public PetSitterServiceImpl(IPetSitterRepository petSitterRepository) {
        super(petSitterRepository);
        this.petSitterRepository = petSitterRepository;
    }

    // Implementación del método abstracto getRepository()
    @Override
    protected BaseRepository<PetSitter, Long> getRepository() {
        return petSitterRepository;
    }

    // Método para buscar cuidadores de mascotas según ciertos criterios
    @Override
    public Page<PetSitter> searchPetSitters(String service, String location, LocalDate startDate, LocalDate endDate, Pageable pageable) {
        return petSitterRepository.findByServices_NameContainingAndAddressContainingAndAvailabilityBetween(
                service, location, startDate, endDate, pageable);
    }
}
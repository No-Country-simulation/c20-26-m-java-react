package com.pet.services;

import com.pet.dtos.request.ReservationRequestDTO;
import com.pet.dtos.responses.ReservationResponseDTO;
import com.pet.exceptions.PetNotAvailableException;
import com.pet.exceptions.PetSitterNotAvailableException;
import com.pet.exceptions.ResourceNotFoundException;
import com.pet.models.Pet;
import com.pet.models.PetOwner;
import com.pet.models.PetSitter;
import com.pet.models.Reservation;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetOwnerRepository;
import com.pet.repositories.IPetRepository;
import com.pet.repositories.IPetSitterRepository;
import com.pet.repositories.IReservationRepository;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl extends BaseServiceImpl<Reservation, Long> implements ReservationService {

    @Autowired
    private IReservationRepository reservationRepository;

    @Autowired
    private IPetSitterRepository petSitterRepository;

    @Autowired
    private IPetRepository petRepository;
    
    @Autowired
    private IPetOwnerRepository petOwnerRepository;
    
    
    public ReservationServiceImpl(BaseRepository<Reservation, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public ReservationResponseDTO createReservation(ReservationRequestDTO request) {
        
        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador con el ID especificado."));

        Pet pet = petRepository.findById(request.getPetId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró mascota con el ID especificado."));
        
        PetOwner petOwner = petOwnerRepository.findById(request.getPetOwnerId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró dueño con el ID especificado."));

        boolean petSitterAvailable = !reservationRepository.existsByPetSitterAndReservationDayAndReservationHour(petSitter, request.getReservationDay(), request.getReservationHour());
        if (!petSitterAvailable) {
            throw new PetSitterNotAvailableException("El cuidador no está disponible en el horario seleccionado.");
        }

        //Deberia cambiar el dueño por la mascota, ver desp
        boolean petOwnerHasReservation = reservationRepository.existsByPetOwnerAndReservationDayAndReservationHour(petOwner, request.getReservationDay(), request.getReservationHour());
        if (petOwnerHasReservation) {
            throw new PetNotAvailableException("El dueño ya tiene una cita en el plazo seleccionado.");
        }

        Reservation reservation = Reservation.builder()
                .petSitter(petSitter)
                .pet(pet)
                .petOwner(petOwner)
                .reservationDay(request.getReservationDay())
                .reservationHour(request.getReservationHour())
                .reservationDescription(request.getReservationDescription())
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .build();

        reservation = reservationRepository.save(reservation);
        return new ReservationResponseDTO(reservation);
    }

    @Override
    public ReservationResponseDTO updateReservation(Long reservationId, ReservationRequestDTO reservationRequestDTO) {





    }

    @Override
    public ReservationResponseDTO getReservationById(Long reservationId) {








    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetSitterId(Long petSitterId) {








    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetId(Long petId) {








    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetOwnerId(Long petOwnerId) {









    }

    @Override
    public List<ReservationResponseDTO> getAllReservations() {








    }
}

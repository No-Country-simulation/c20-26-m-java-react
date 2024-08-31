package com.pet.services;

import com.pet.dtos.request.ReservationRequestDTO;
import com.pet.dtos.responses.ReservationResponseDTO;
import com.pet.exceptions.PetOwnerNotAvailableException;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

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

    // Implementación del método abstracto getRepository()
    @Override
    protected BaseRepository<Reservation, Long> getRepository() {
        return reservationRepository;
    }

    // Método para crear una reservación
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

        boolean petOwnerHasReservation = reservationRepository.existsByPetOwnerAndReservationDayAndReservationHour(petOwner, request.getReservationDay(), request.getReservationHour());
        if (petOwnerHasReservation) {
            throw new PetOwnerNotAvailableException("El dueño ya tiene una cita en el plazo seleccionado.");
        }

        Reservation reservation = new Reservation();
        reservation.setPetSitter(petSitter);
        reservation.setPet(pet);
        reservation.setPetOwner(petOwner);
        reservation.setReservationDay(request.getReservationDay());
        reservation.setReservationHour(request.getReservationHour());
        reservation.setReservationDescription(request.getReservationDescription());
        reservation.setCreatedAt(LocalDate.now());
        reservation.setUpdatedAt(LocalDate.now());

        reservation = reservationRepository.save(reservation);
        return new ReservationResponseDTO(reservation);
    }

    // Método para actualizar una reservación
    @Override
    public ReservationResponseDTO updateReservation(Long reservationId, ReservationRequestDTO request) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró reservación."));

        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador."));

        Pet pet = petRepository.findById(request.getPetId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró mascota."));

        PetOwner petOwner = petOwnerRepository.findById(request.getPetOwnerId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró dueño."));

        reservation.setPetSitter(petSitter);
        reservation.setPet(pet);
        reservation.setPetOwner(petOwner);
        reservation.setReservationDay(request.getReservationDay());
        reservation.setReservationHour(request.getReservationHour());
        reservation.setReservationDescription(request.getReservationDescription());
        reservation.setUpdatedAt(LocalDate.now());

        reservation = reservationRepository.save(reservation);
        return new ReservationResponseDTO(reservation);
    }

    // Método para obtener una reservación por ID
    @Override
    public ReservationResponseDTO getReservationById(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró reservación."));
        return new ReservationResponseDTO(reservation);
    }

    // Método para obtener reservaciones por ID de cuidador de mascotas
    @Override
    public List<ReservationResponseDTO> getReservationsByPetSitterId(Long petSitterId) {
        List<Reservation> reservations = reservationRepository.findByPetSitterId(petSitterId);
        return reservations.stream()
                .map(ReservationResponseDTO::new)
                .collect(Collectors.toList());
    }

    // Método para obtener reservaciones por ID de mascota
    @Override
    public List<ReservationResponseDTO> getReservationsByPetId(Long petId) {
        List<Reservation> reservations = reservationRepository.findByPetId(petId);
        return reservations.stream()
                .map(ReservationResponseDTO::new)
                .collect(Collectors.toList());
    }

    // Método para obtener reservaciones por ID de dueño de mascota
    @Override
    public List<ReservationResponseDTO> getReservationsByPetOwnerId(Long petOwnerId) {
        List<Reservation> reservations = reservationRepository.findByPetOwnerId(petOwnerId);
        return reservations.stream()
                .map(ReservationResponseDTO::new)
                .collect(Collectors.toList());
    }

    // Método para obtener todas las reservaciones
    @Override
    public List<ReservationResponseDTO> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream()
                .map(ReservationResponseDTO::new)
                .collect(Collectors.toList());
    }
}
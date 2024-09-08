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
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    protected BaseRepository<Reservation, Long> getRepository() {
        return reservationRepository;
    }

    @Override
    @Transactional
    public ReservationResponseDTO createReservation(ReservationRequestDTO request) {
        // Obtener el cuidador de mascotas por ID
        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador con el ID especificado."));

        // Obtener la mascota por ID
        Pet pet = petRepository.findById(request.getPetId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró mascota con el ID especificado."));

        // Obtener el dueño de la mascota por ID
        PetOwner petOwner = petOwnerRepository.findById(request.getPetOwnerId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró dueño con el ID especificado."));

        // Verificar disponibilidad del cuidador de mascotas
        boolean petSitterAvailable = !reservationRepository.existsByPetSitterAndReservationDayAndReservationHour(petSitter, request.getReservationDay(), request.getReservationHour());
        if (!petSitterAvailable) {
            throw new PetSitterNotAvailableException("El cuidador no está disponible en el horario seleccionado.");
        }

        // Verificar si el dueño ya tiene una reserva en el mismo horario
        boolean petOwnerHasReservation = reservationRepository.existsByPetOwnerAndReservationDayAndReservationHour(petOwner, request.getReservationDay(), request.getReservationHour());
        if (petOwnerHasReservation) {
            throw new PetOwnerNotAvailableException("El dueño ya tiene una cita en el plazo seleccionado.");
        }

        // Crear una nueva reserva
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

        // Guardar la reserva en el repositorio
        reservation = reservationRepository.save(reservation);
        return new ReservationResponseDTO(reservation);
    }

    @Override
    @Transactional
    public ReservationResponseDTO updateReservation(Long reservationId, ReservationRequestDTO request) {
        // Obtener la reserva por ID
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró reservación."));

        // Obtener el cuidador de mascotas por ID
        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador."));

        // Obtener la mascota por ID
        Pet pet = petRepository.findById(request.getPetId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró mascota."));

        // Obtener el dueño de la mascota por ID
        PetOwner petOwner = petOwnerRepository.findById(request.getPetOwnerId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró dueño."));

        // Actualizar los detalles de la reserva
        reservation.setPetSitter(petSitter);
        reservation.setPet(pet);
        reservation.setPetOwner(petOwner);
        reservation.setReservationDay(request.getReservationDay());
        reservation.setReservationHour(request.getReservationHour());
        reservation.setReservationDescription(request.getReservationDescription());
        reservation.setUpdatedAt(LocalDate.now());

        // Guardar la reserva actualizada en el repositorio
        reservation = reservationRepository.save(reservation);
        return new ReservationResponseDTO(reservation);
    }

    @Override
    public ReservationResponseDTO getReservationById(Long reservationId) {
        // Obtener la reserva por ID
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró reservación."));
        return new ReservationResponseDTO(reservation);
    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetSitterId(Long petSitterId) {
        // Obtener las reservas por ID del cuidador de mascotas
        List<Reservation> reservations = reservationRepository.findByPetSitterId(petSitterId);
        return reservations.stream().map(ReservationResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetId(Long petId) {
        // Obtener las reservas por ID de la mascota
        List<Reservation> reservations = reservationRepository.findByPetId(petId);
        return reservations.stream().map(ReservationResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<ReservationResponseDTO> getReservationsByPetOwnerId(Long petOwnerId) {
        // Obtener las reservas por ID del dueño de la mascota
        List<Reservation> reservations = reservationRepository.findByPetOwnerId(petOwnerId);
        return reservations.stream().map(ReservationResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<ReservationResponseDTO> getAllReservations() {
        // Obtener todas las reservas
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream()
                .map(ReservationResponseDTO::new)
                .collect(Collectors.toList());
    }
}
package com.pet.services;

import com.pet.dtos.requests.QualificationCreateDTO;
import com.pet.dtos.requests.QualificationUpdateDTO;
import com.pet.dtos.responses.QualificationResponseDTO;
import com.pet.exceptions.ResourceNotFoundException;
import com.pet.models.PetService;
import com.pet.models.PetSitter;
import com.pet.models.Qualification;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetServiceRepository;
import com.pet.repositories.IPetSitterRepository;
import com.pet.repositories.IQualificationRepository;
import com.pet.services.BaseServiceImpl;
import com.pet.services.QualificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QualificationServiceImpl extends BaseServiceImpl<Qualification, Long> implements QualificationService {

    @Autowired
    private IQualificationRepository qualificationRepository;

    @Autowired
    private IPetSitterRepository petSitterRepository;

    @Autowired
    private IPetServiceRepository petServiceRepository;

    public QualificationServiceImpl(BaseRepository<Qualification, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public QualificationResponseDTO createQualification(QualificationCreateDTO request) {
        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador con el ID especificado."));

        PetService petService = petServiceRepository.findById(request.getPetServiceId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró servicio con el ID especificado."));

        Qualification qualification = Qualification.builder()
                .petSitter(petSitter)
                .petService(petService)
                .value(request.getValue())
                .description(request.getDescription())
                .build();

        Qualification response = qualificationRepository.save(qualification);
        return new QualificationResponseDTO(response);
    }

    @Override
    public QualificationResponseDTO updateQualification(Long qualificationId, QualificationUpdateDTO request) {
        Qualification qualification = qualificationRepository.findById(qualificationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró calificación."));

        PetSitter petSitter = petSitterRepository.findById(request.getPetSitterId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró cuidador."));

        PetService petService = petServiceRepository.findById(request.getPetServiceId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró servicio con el ID especificado."));

        qualification.setPetSitter(petSitter);
        qualification.setPetService(petService);
        qualification.setValue(request.getValue());
        qualification.setDescription(request.getDescription());

        qualification = qualificationRepository.save(qualification);
        return new QualificationResponseDTO(qualification);
    }

    @Override
    public QualificationResponseDTO getQualificationById(Long qualificationId) {
        Qualification qualification = qualificationRepository.findById(qualificationId)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró calificación."));
        return new QualificationResponseDTO(qualification);
    }

    @Override
    public List<QualificationResponseDTO> getQualificationsByPetSitterId(Long petSitterId) {
        List<Qualification> qualifications = qualificationRepository.findByPetSitterId(petSitterId);
        return qualifications.stream().map(QualificationResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<QualificationResponseDTO> getQualificationsByPetServiceId(Long petServiceId) {
        List<Qualification> qualifications = qualificationRepository.findByPetServiceId(petServiceId);
        return qualifications.stream().map(QualificationResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<QualificationResponseDTO> getAllQualifications() {
        List<Qualification> qualifications = qualificationRepository.findAll();
        return qualifications.stream()
                .map(QualificationResponseDTO::new)
                .collect(Collectors.toList());
    }
}

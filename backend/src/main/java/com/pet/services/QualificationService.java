package com.pet.services;

import com.pet.dtos.requests.QualificationCreateDTO;
import com.pet.dtos.requests.QualificationUpdateDTO;
import com.pet.dtos.responses.QualificationResponseDTO;
import com.pet.models.Qualification;
import java.util.List;

public interface QualificationService extends BaseService<Qualification, Long> {

    QualificationResponseDTO createQualification(QualificationCreateDTO qualificationCreateDTO);
    QualificationResponseDTO updateQualification(Long qualificationId, QualificationUpdateDTO qualificationUpdateDTO);
    QualificationResponseDTO getQualificationById(Long qualificationId);
    List<QualificationResponseDTO> getQualificationsByPetSitterId(Long petSitterId);
    List<QualificationResponseDTO> getQualificationsByPetServiceId(Long petServiceId);
    List<QualificationResponseDTO> getAllQualifications();
}

package com.pet.repositories;

import com.pet.models.Qualification;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IQualificationRepository extends BaseRepository<Qualification, Long>{
    List<Qualification> findByPetSitterId(Long petSitterId);
    List<Qualification> findByPetServiceId(Long petServiceId);
}

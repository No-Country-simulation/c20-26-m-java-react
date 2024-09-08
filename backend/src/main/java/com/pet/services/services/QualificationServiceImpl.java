package com.pet.services.services;

import com.pet.models.Qualification;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IQualificationRepository;
import com.pet.services.BaseServiceImpl;
import com.pet.services.QualificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QualificationServiceImpl extends BaseServiceImpl<Qualification, Long> implements QualificationService {

    @Autowired
    private IQualificationRepository qualificationRepository;

    public QualificationServiceImpl(BaseRepository<Qualification, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    protected BaseRepository<Qualification, Long> getRepository() {
        return qualificationRepository;
    }
}
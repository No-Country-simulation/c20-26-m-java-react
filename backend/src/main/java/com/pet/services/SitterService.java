package com.pet.services;

import com.pet.models.Sitter;
import com.pet.repositories.ISitterRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SitterService implements ISitterService {
    
    @Autowired
    private ISitterRepository sitRepo;

    @Override
    public List<Sitter> getAllSitters() {
        List <Sitter> SittersList= sitRepo.findAll();
        return SittersList;    
    }

    @Override
    public Sitter findSitter(Long id) {
        Sitter sit = sitRepo.findById(id).orElse(null);
        return sit;
    }

    @Override
    public void saveSitter(Sitter sit) {
        sitRepo.save(sit);
    }

    @Override
    public void deleteSitter(Long id) {
        sitRepo.deleteById(id);
    }

    @Override
    public void editSitter(Sitter sit) {
        this.saveSitter(sit);
    }
}

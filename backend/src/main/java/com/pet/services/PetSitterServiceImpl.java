package com.pet.services;

import com.pet.models.PetSitter;
import com.pet.models.Role;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetSitterRepository;

import com.pet.repositories.IRoleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PetSitterServiceImpl extends BaseServiceImpl<PetSitter, Long> implements PetSitterService {

    @Autowired
    private IPetSitterRepository petSitterRepository;

    @Autowired
    private IRoleRepository roleRepository;

    public PetSitterServiceImpl(BaseRepository<PetSitter, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    @Transactional
    public PetSitter save(PetSitter entity) throws Exception {
        try {
            //When an PetSitter is created, the role is PET_SITTER by default
            Set<Role> roles = new HashSet<>();
            Optional<Role> petSitterRole = roleRepository.findById(2L);
            petSitterRole.ifPresent(roles::add);
            entity.setRolesList(roles);

            entity = baseRepository.save(entity);
            return entity;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public List<PetSitter> findPendingApprovalPetSitters() {
        return petSitterRepository.findByApproved(false);
    }

    public boolean approvePetSitter(Long id) {
        Optional<PetSitter> optionalPetSitter = petSitterRepository.findById(id);
        if (optionalPetSitter.isPresent()) {
            PetSitter petSitter = optionalPetSitter.get();
            petSitter.setApproved(true);
            petSitterRepository.save(petSitter);
            return true;
        }
        return false;
    }
}
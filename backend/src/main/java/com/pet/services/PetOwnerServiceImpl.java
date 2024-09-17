package com.pet.services;

import com.pet.models.Admin;
import com.pet.models.PetOwner;
import com.pet.models.PetService;
import com.pet.models.Role;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IPetOwnerRepository;
import com.pet.repositories.IRoleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class PetOwnerServiceImpl extends BaseServiceImpl<PetOwner, Long> implements PetOwnerService {

    @Autowired
    private IPetOwnerRepository petOwnerRepository;

    @Autowired
    private IRoleRepository roleRepository;

    public PetOwnerServiceImpl(BaseRepository<PetOwner, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    @Transactional
    public PetOwner save(PetOwner entity) throws Exception {
        try {
            //When an PetOwner is created, the role is PET_OWNER by default
            Set<Role> roles = new HashSet<>();
            Optional<Role> petOwnerRole = roleRepository.findById(3L);
            petOwnerRole.ifPresent(roles::add);
            entity.setRolesList(roles);

            entity = baseRepository.save(entity);
            return entity;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

}

package com.pet.services;

import com.pet.models.Admin;
import com.pet.models.Permission;
import com.pet.models.Role;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IAdminRepository;
import com.pet.repositories.IRoleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AdminServiceImpl extends BaseServiceImpl<Admin, Long> implements AdminService {

    @Autowired
    private IAdminRepository adminRepository;
    @Autowired
    private IRoleRepository roleRepository;


    public AdminServiceImpl(BaseRepository<Admin, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    @Transactional
    public Admin save(Admin entity) throws Exception {
        try {
            //When an admin is created, the role is admin by default
            Set<Role> roles = new HashSet<>();
            Optional<Role> adminRole = roleRepository.findById(1L);
            adminRole.ifPresent(roles::add);
            entity.setRolesList(roles);

            entity = baseRepository.save(entity);
            return entity;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}

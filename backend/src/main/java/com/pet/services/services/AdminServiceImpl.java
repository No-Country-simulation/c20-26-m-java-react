package com.pet.services.services;

import com.pet.models.Admin;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IAdminRepository;
import com.pet.services.AdminService;
import com.pet.services.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl extends BaseServiceImpl<Admin, Long> implements AdminService {

    @Autowired
    private IAdminRepository adminRepository;

    public AdminServiceImpl(BaseRepository<Admin, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    protected BaseRepository<Admin, Long> getRepository() {
        return adminRepository;
    }
}

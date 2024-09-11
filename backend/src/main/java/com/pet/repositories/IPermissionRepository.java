package com.pet.repositories;

import com.pet.models.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPermissionRepository extends JpaRepository<Permission, Long> {
    
}

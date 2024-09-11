package com.pet.services;

import com.pet.models.Permission;
import java.util.List;
import java.util.Optional;

public interface PermissionService {
    List <Permission> findAll();
    Optional <Permission> findById(Long id);
    Permission save (Permission permission);
    void deleteById(Long id);
    Permission update (Permission permission);
}

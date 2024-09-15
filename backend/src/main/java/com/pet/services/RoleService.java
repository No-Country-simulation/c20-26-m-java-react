package com.pet.services;

import com.pet.models.Role;
import java.util.List;
import java.util.Optional;

public interface RoleService {
    List <Role> findAll();
    Optional <Role> findById(Long id);
    Role save (Role role);
    void deleteById(Long id);
    Role update (Role role);
}

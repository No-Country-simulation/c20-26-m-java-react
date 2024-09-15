package com.pet.services;

import com.pet.models.UserSec;
import java.util.List;
import java.util.Optional;

public interface UserSecService {
    List <UserSec> findAll();
    Optional <UserSec> findById(Long id);
    UserSec save (UserSec userSec);
    void deleteById(Long id);
    UserSec update (UserSec userSec); 
    public String encriptPassword(String password);
}

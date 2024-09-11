package com.pet.repositories;

import com.pet.models.UserSec;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserSecRepository extends JpaRepository<UserSec, Long> {
    
    Optional<UserSec> findUserSecEntityByUsername(String username);
    //Luisina:     Optional<UserSec> findUserEntityByUsername(String username);

}

package com.pet.repositories;

import com.pet.models.UserSec;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserSecRepository extends JpaRepository<UserSec, Long> {
    
    Optional<UserSec> findUserSecEntityByUsername(String username);
}

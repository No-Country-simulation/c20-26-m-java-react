package com.pet.services;

import com.pet.models.UserSec;
import com.pet.repositories.IUserSecRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSecServiceImpl implements UserSecService{

    @Autowired
    private IUserSecRepository userSecRepository;
    
    @Override
    public List<UserSec> findAll() {
        return userSecRepository.findAll();
    }

    @Override
    public Optional<UserSec> findById(Long id) {
        return userSecRepository.findById(id);
    }

    @Override
    public UserSec save(UserSec userSec) {
        return userSecRepository.save(userSec);
    }

    @Override
    public void deleteById(Long id) {
        userSecRepository.deleteById(id);
    }

    @Override
    public UserSec update(UserSec userSec) {
        return save(userSec);
    }

    //Implementar a futuro
    @Override
    public String encriptPassword(String password) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
}

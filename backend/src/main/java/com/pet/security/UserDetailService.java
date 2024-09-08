package com.pet.security;

import com.pet.models.PetOwner;
import com.pet.repositories.IPetOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
class UserDetailsServiceImpl implements UserDetailsService {

    // Inyectar el repositorio de usuarios o cualquier otra fuente de datos
    @Autowired
    private IPetOwnerRepository IPetOwnerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        PetOwner user = IPetOwnerRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Usuario no encontrado: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }

}

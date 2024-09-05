package com.pet.security;

import com.pet.models.Admin;
import com.pet.models.PetOwner;
import com.pet.models.PetSitter;
import com.pet.models.User;
import com.pet.repositories.BaseRepository;
import com.pet.repositories.IAdminRepository;
import com.pet.repositories.IPetOwnerRepository;
import com.pet.repositories.IPetSitterRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IAdminRepository adminRepository;
    @Autowired
    private IPetOwnerRepository petOwnerRepository;
    @Autowired
    private IPetSitterRepository petSitterRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin = adminRepository.findByUsername(username);
        PetOwner customer = petOwnerRepository.findByUsername(username);
        PetSitter petSitter = petSitterRepository.findByUsername(username);
        if (admin == null || customer == null || petSitter == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(admin.getUsername(), admin.getPassword(), new ArrayList<>());
    }
}
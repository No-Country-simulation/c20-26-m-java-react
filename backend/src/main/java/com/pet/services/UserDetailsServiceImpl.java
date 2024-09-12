package com.pet.services;

import com.pet.models.UserSec;
import com.pet.repositories.IUserSecRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private IUserSecRepository userSecRepo;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserSec userSec = userSecRepo.findUserSecEntityByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("El usuario " + username + " no ha sido encontrado"));
        
        List<SimpleGrantedAuthority> authorityList = new ArrayList<>();
        
        userSec.getRolesList()
                .forEach(role -> authorityList.add(new SimpleGrantedAuthority("ROLE_" + role.getRole())));
        
        userSec.getRolesList().stream()
                .flatMap(role -> role.getPermissionsList().stream())
                .forEach(permission -> authorityList.add(new SimpleGrantedAuthority(permission.getPermissionName())));
        
        return new org.springframework.security.core.userdetails.User(
            userSec.getUsername(),
            userSec.getPassword(),
            userSec.isEnabled(),
            userSec.isAccountNotExpired(),
            userSec.isCredentialNotExpired(),
            userSec.isAccountNotLocked(),
            authorityList
        );
    }
}
package com.pet.controllers;

import com.pet.models.Role;
import com.pet.models.UserSec;
import com.pet.services.RoleService;
import com.pet.services.UserSecService;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserSecController {
    
    @Autowired
    private UserSecService userSecService;
    
    @Autowired
    private RoleService roleService;

    @GetMapping
    public ResponseEntity <List<UserSec>> getAllUsers() {
        List <UserSec> users = userSecService.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserSec> getUserById(@PathVariable Long id){
        Optional <UserSec> user = userSecService.findById(id);
        return user.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<UserSec> createUser(@RequestBody UserSec userSec){
        Set <Role> roleList = new HashSet<Role>();
        Role readRole;
        
        for(Role role: userSec.getRolesList()){
            readRole= roleService.findById(role.getId()).orElse(null);
            if(readRole !=null){
                roleList.add(readRole);
            }
        }

        if(!roleList.isEmpty()){
            userSec.setRolesList(roleList);
            
            UserSec newUser= userSecService.save(userSec);
            return ResponseEntity.ok(newUser);
        }
        return null;
    }
}

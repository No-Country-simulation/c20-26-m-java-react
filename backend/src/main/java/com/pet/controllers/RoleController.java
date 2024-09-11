package com.pet.controllers;

import com.pet.models.Permission;
import com.pet.models.Role;
import com.pet.services.PermissionService;
import com.pet.services.RoleService;
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

@RequestMapping("/api/roles")
@RestController
public class RoleController {
    
    @Autowired
    private RoleService roleService;
    
    @Autowired
    private PermissionService permissionService;
    
    @GetMapping
    public ResponseEntity <List<Role>> getAllRoles() {
        List <Role> roles = roleService.findAll();
        return ResponseEntity.ok(roles);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable Long id){
        Optional <Role> role = roleService.findById(id);
        return role.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody Role role){
        Set <Permission> permiList = new HashSet<Permission>();
        Permission readPermission;
        
        for(Permission per: role.getPermissionsList()){
            readPermission= permissionService.findById(per.getId()).orElse(null);
            if(readPermission !=null){
                permiList.add(readPermission);
            }
        }
        
        role.setPermissionsList(permiList);
        Role newRole= roleService.save(role);
        return ResponseEntity.ok(newRole);
    }
}

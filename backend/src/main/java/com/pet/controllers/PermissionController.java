package com.pet.controllers;

import com.pet.models.Permission;
import com.pet.services.PermissionService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/permissions")
public class PermissionController {
    
    @Autowired
    private PermissionService permissionService;
    
    @GetMapping
    public ResponseEntity <List<Permission>> getAllPermissions() {
        List <Permission> permissions = permissionService.findAll();
        return ResponseEntity.ok(permissions);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Permission> getPermissionById(@PathVariable Long id){
        Optional <Permission> permission=permissionService.findById(id);
        return permission.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Permission> createPermission(@RequestBody Permission permission){
        Permission newPermission = permissionService.save(permission);
        return ResponseEntity.ok(newPermission);
    }
    
}

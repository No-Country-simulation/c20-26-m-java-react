package com.pet.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@Entity
//@Table(name = "admin")
public class Admin extends UserSec {

//    public Admin() {
//        // Si rolesList es null o está vacío, inicializarlo
//        if (this.getRolesList() == null || this.getRolesList().isEmpty()) {
//            Role defaultRole = new Role(1, "ADMIN", List.of(new Permission(1, "READ")));
//            this.setRolesList(Set.of(defaultRole));  // Asigna el rol predeterminado
//        }
//    }

}

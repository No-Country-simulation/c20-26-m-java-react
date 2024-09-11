package com.pet.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.util.HashSet;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSec {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   @Column (unique = true)
   private String username;
   private String password;
   private boolean enabled;
   private boolean accountNotExpired;
   private boolean accountNotLocked;
   private boolean credentialNotExpired;
   
   @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
   @JoinTable(name = "user_roles", joinColumns = @JoinColumn (name = "user_id"),
           inverseJoinColumns= @JoinColumn(name= "role_id"))
   private Set <Role> rolesList = new HashSet<>();
   
}

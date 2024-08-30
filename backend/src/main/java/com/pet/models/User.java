package com.pet.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.MappedSuperclass;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public abstract class User extends Base{

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "dni", unique = true, nullable = false)
    private String dni;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "cellphone", nullable = false)
    private String cellphone;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "photo")
    private String photo;
}

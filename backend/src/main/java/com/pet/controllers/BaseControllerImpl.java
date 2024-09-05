package com.pet.controllers;

import com.pet.models.Base;
import com.pet.services.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public abstract class BaseControllerImpl<E extends Base, S extends BaseServiceImpl<E, Long>> implements BaseController<E, Long> {

    @Autowired
    protected S servicio;


    @GetMapping("")
    public ResponseEntity<?> getAll(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.findAll());
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }


    @GetMapping("/paged")
    public ResponseEntity<?> getAll(Pageable pageable){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.findAll(pageable));
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.findById(id));
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody E entity){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.save(entity));
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody E entity){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.update(id,entity));
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        try {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(servicio.delete(id));
        } catch (Exception e) {
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Error. Por favor intente más tarde.";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\":\"" + errorMessage + "\"}");
        }
    }

}
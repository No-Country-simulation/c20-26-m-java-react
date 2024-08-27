package com.pet.controllers;

import com.pet.models.Sitter;
import com.pet.services.ISitterService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SitterController {
    
    @Autowired
    private ISitterService sitServ;

    @GetMapping ("/sitters")
    public List <Sitter> getAllSitters(){
        return sitServ.getAllSitters();
    }
    
    @PostMapping ("/sitters/create")
    public String saveSitter(@RequestBody Sitter sit){
        sitServ.saveSitter(sit);
        
        return "El cuidador se guardó correctamente";
    }
    
    @DeleteMapping("/sitters/delete/{id}")
    public String deleteSitter(@PathVariable Long id){
        sitServ.deleteSitter(id);
        
        return "El cuidador se borró correctamente";
    }
    
    @PutMapping("/sitters/edit")
    public Sitter editSitter(@RequestBody Sitter sit){
        sitServ.editSitter(sit);
        
        return sitServ.findSitter(sit.getId());
    } 
}

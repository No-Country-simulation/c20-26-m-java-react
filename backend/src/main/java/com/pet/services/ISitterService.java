package com.pet.services;

import com.pet.models.Sitter;
import java.util.List;

public interface ISitterService {
    
    public List <Sitter> getAllSitters();
    
    public Sitter findSitter(Long id);
    
    public void saveSitter(Sitter sit);
    
    public void deleteSitter(Long id);
    
    public void editSitter(Sitter sit);
}
